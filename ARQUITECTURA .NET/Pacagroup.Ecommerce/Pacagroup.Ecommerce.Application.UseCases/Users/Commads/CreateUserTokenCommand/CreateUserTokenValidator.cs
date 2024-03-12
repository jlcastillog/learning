﻿using FluentValidation;

namespace Pacagroup.Ecommerce.Application.UseCases.Users.Commads.CreateUserTokenCommand
{
    public class CreateUserTokenValidator : AbstractValidator<CreateUserTokenCommand>
    {
        public CreateUserTokenValidator()
        {
            RuleFor(u => u.UserName).NotNull().NotEmpty();
            RuleFor(u => u.Password).NotNull().NotEmpty().MinimumLength(5);
        }
    }
}
