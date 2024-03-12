﻿using MassTransit;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Pacagroup.Ecommerce.ConsoleApp.Consumer;

public class Program
{
    public static async Task Main(string[] args)
    {
        await Host.CreateDefaultBuilder(args)
                    .ConfigureServices(services =>
                    {
                        services.AddMassTransit(x =>
                        {
                            x.AddConsumer<DiscountCreatedConsumer>();
                            x.UsingRabbitMq((context, cfg) =>
                            {
                                cfg.Host("localhost","/", h =>
                                {
                                    h.Username("guest");
                                    h.Password("guest");
                                });

                                cfg.ConfigureEndpoints(context);
                            });
                        });
                    })
                    .Build()
                    .RunAsync();
    }
}
