using Asp.Versioning.ApiExplorer;
using HealthChecks.UI.Client;
using Pacagroup.Ecommerce.Services.WebApi.Modules.Authentication;
using Pacagroup.Ecommerce.Services.WebApi.Modules.Feature;
using Pacagroup.Ecommerce.Services.WebApi.Modules.HealthCheck;
using Pacagroup.Ecommerce.Services.WebApi.Modules.Injection;
using Pacagroup.Ecommerce.Services.WebApi.Modules.RateLimiter;
using Pacagroup.Ecommerce.Services.WebApi.Modules.Redis;
using Pacagroup.Ecommerce.Services.WebApi.Modules.Swagger;
using Pacagroup.Ecommerce.Services.WebApi.Modules.Versioning;
using Pacagroup.Ecommerce.Services.WebApi.Modules.Watch;
using Pacagroup.Ecommerce.Persistence;
using Pacagroup.Ecommerce.Application.UseCases;
using Pacagroup.Ecommerce.Infrastructure;
using WatchDog;
using Pacagroup.Ecommerce.Services.WebApi.Modules.Middleware;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddEndpointsApiExplorer();

//Register features
builder.Services.AddFeature(builder.Configuration);
//Register Persistence Services
builder.Services.AddPersistenceServices(builder.Configuration);
//Register Infrastructure Services
builder.Services.AddInfrastructureServices();
//Register Application Services
builder.Services.AddApplicationServices();
//Register injections
builder.Services.AddInjections();
//Register authenticcation
builder.Services.AddAuthentication(builder.Configuration);
//Register versioning
builder.Services.AddVersioning();
//Register the Swagger generator
builder.Services.AddSwagger();
//Register Health Checks
builder.Services.AddHealthCheck(builder.Configuration);
//Register Watchdog
builder.Services.AddWatchDog(builder.Configuration);
//Register Redis Cache
builder.Services.AddRedisCache(builder.Configuration);
//Register Rate Limiter
builder.Services.AddRateLimiting(builder.Configuration);


var app = builder.Build();

// Configure the HTTP request pipeline.
var provider = app.Services.GetRequiredService<IApiVersionDescriptionProvider>();
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    //Build a swagger endpoint for each discovered API version
    foreach (var description in provider.ApiVersionDescriptions)
    {
        c.SwaggerEndpoint($"/swagger/{description.GroupName}/swagger.json", description.GroupName.ToUpperInvariant());
    }
});

app.UseReDoc(options =>
{
    //Build a swagger endpoint for each discovered API version
    foreach (var description in provider.ApiVersionDescriptions)
    {
        options.DocumentTitle = "Pacagroup Technology Service API Market";
        options.SpecUrl= $"/swagger/{description.GroupName}/swagger.json";
    }
});

app.UseWatchDogExceptionLogger();
app.UseHttpsRedirection();
app.UseCors(FeatureExtensions.myPolicy);
app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();
app.UseRateLimiter();
app.AddMiddleware();
app.UseEndpoints(_ => { });
app.MapControllers();
app.MapHealthChecksUI();

app.MapHealthChecks("/health", new Microsoft.AspNetCore.Diagnostics.HealthChecks.HealthCheckOptions
{
    Predicate = _ => true,
    ResponseWriter = UIResponseWriter.WriteHealthCheckUIResponse
});

app.UseWatchDog(conf =>
{
    conf.WatchPageUsername = builder.Configuration["WatchDog:WatchPageUsername"];
    conf.WatchPagePassword = builder.Configuration["WatchDog:WatchPagePassword"];
});

app.Run();

public partial class Program { };