﻿using Pacagroup.Ecommerce.Application.UseCases.Common.Exceptions;
using Pacagroup.Ecommerce.Transversal.Common;
using System.Net;
using System.Text.Json;

namespace Pacagroup.Ecommerce.Services.WebApi.Modules.GlobalException
{
    public class GlobalExceptionHandler : IMiddleware
    {
        private readonly ILogger<GlobalExceptionHandler> _logger;

        public GlobalExceptionHandler(ILogger<GlobalExceptionHandler> logger)
        {
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            try
            {
                await next(context);
            }
            catch (ValidationExceptionCustom ex)
            {
                context.Response.ContentType = "application/json";
                await JsonSerializer.SerializeAsync(context.Response.Body, 
                    new Response<Object> { Message = "Validation errors", Errors = ex.Errors});
            }
            catch (Exception ex)
            {
                string message = ex.Message.ToString();
                context.Response.ContentType = "application/json";
                context.Response.StatusCode = (int) HttpStatusCode.InternalServerError;

                _logger.LogError($"Exception details: {message}");

                var respose = new Response<Object>()
                {
                    Message = message
                };

                await JsonSerializer.SerializeAsync(context.Response.Body, respose);
            }
        }
    }
}
