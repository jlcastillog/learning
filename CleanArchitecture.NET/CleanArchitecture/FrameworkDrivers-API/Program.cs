using ApplicationLayer;
using EnterpriseLayer;
using FluentValidation;
using FluentValidation.AspNetCore;
using FrameworkDrivers_API.Middlewares;
using FrameworkDrivers_API.Validators;
using FrameworkDrivers_ExternalService;
using Interface_Adapters_Adapter;
using Interface_Adapters_Adapter.Dtos;
using InterfaceAdapters_Data;
using InterfaceAdapters_Mappers;
using InterfaceAdapters_Mappers.Dtos.Requests;
using InterfaceAdapters_Presenters;
using InterfaceAdapters_Repository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// validadores
builder.Services.AddValidatorsFromAssemblyContaining<BeerValidator>();
builder.Services.AddFluentValidationAutoValidation();
builder.Services.AddFluentValidationClientsideAdapters();

// dependencias
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

// Repository
builder.Services.AddScoped<IRepository<BeerEntity>, Repository>();
builder.Services.AddScoped<IRepository<SaleEntity>, SaleRepository>();

// Presenters
builder.Services.AddScoped<IPresenter<BeerEntity, BeerViewModel>, BeerPresenter>();
builder.Services.AddScoped<IPresenter<BeerEntity, BeerDetailViewModel>, BeerDetailPresenter>();

// Services
builder.Services.AddScoped<IExternalService<PostServiceDto>, PostService>();
builder.Services.AddHttpClient<IExternalService<PostServiceDto>, PostService>(c =>
{
    c.BaseAddress = new Uri(builder.Configuration["BaseUrlPost"]);
});


// Adapters
builder.Services.AddScoped<IExternalServiceAdapter<PostEntity>, PostExternalServiceAdapter>();

// Mappers
builder.Services.AddScoped<IMapper<BeerRequestDto, BeerEntity>, BeerMapper>();
builder.Services.AddScoped<IMapper<SaleRequestDto, SaleEntity>, SaleMapper>();

//Use cases
builder.Services.AddScoped<GetBeersUseCase<BeerEntity, BeerViewModel>>();
builder.Services.AddScoped<GetBeersUseCase<BeerEntity, BeerDetailViewModel>>();
builder.Services.AddScoped<AddBeerUseCase<BeerRequestDto>>();
builder.Services.AddScoped<GetPostUseCase>();
builder.Services.AddScoped<GenerateSaleUseCase<SaleRequestDto>>();
builder.Services.AddScoped<GetSalesUseCase>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseMiddleware<ExceptionMiddleware>();

app.MapGet("/beer", async (GetBeersUseCase<BeerEntity, BeerViewModel> beerUseCase) =>
{
    return await beerUseCase.ExecuteAsync();
})
.WithName("beers")
.WithOpenApi();

app.MapPost("/beer", async (BeerRequestDto beerRequest, 
                            AddBeerUseCase<BeerRequestDto> addBeerUseCase,
                            IValidator<BeerRequestDto> validator) =>
{
    var result = await validator.ValidateAsync(beerRequest);

    if (!result.IsValid)
    {
        return Results.ValidationProblem(result.ToDictionary());
    }

    await addBeerUseCase.ExecuteAsync(beerRequest);
    return Results.Created();
})
.WithName("addBeer")
.WithOpenApi();

app.MapGet("/beerDetail", async (GetBeersUseCase<BeerEntity, BeerDetailViewModel> beerUseCase) =>
{
    return await beerUseCase.ExecuteAsync();
})
.WithName("beerDetail")
.WithOpenApi();

app.MapGet("/posts", async (GetPostUseCase postuseCase) =>
{
    return await postuseCase.ExecuteAsync();
})
.WithName("posts")
.WithOpenApi();

app.MapPost("/sale", async (SaleRequestDto saleRequest,  GenerateSaleUseCase<SaleRequestDto> saleUseCase) =>
{
    await saleUseCase.ExecuteAsync(saleRequest);
    return Results.Created();
})
.WithName("generaeteSale")
.WithOpenApi();

app.MapGet("/sales", async (GetSalesUseCase salesUseCase) =>
{
    return await salesUseCase.ExecuteAsync();
})
.WithName("sales")
.WithOpenApi();

app.Run();

