using FluentValidation;
using InterfaceAdapters_Mappers.Dtos.Requests;

namespace FrameworkDrivers_API.Validators
{
    public class BeerValidator : AbstractValidator<BeerRequestDto>
    {
        public BeerValidator()
        {
            RuleFor(b => b.Name).NotEmpty().WithMessage("La cerveza debe de tener nombre0");
            RuleFor(b => b.Alcohol).GreaterThan(0).WithMessage("La cerveza debe de tenr un nivel de alcohol mayor a cero");
        }
    }
}
