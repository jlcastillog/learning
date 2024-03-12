# Use the official .NET Core SDK as a parent image
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy the rest of the application code
COPY . .

WORKDIR /app/Pacagroup.Ecommerce.Services.WebApi

# Publish the application
RUN dotnet restore
RUN dotnet publish -c Release -o out

# Build the runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/Pacagroup.Ecommerce.Services.WebApi/out ./

# Expose the port your application will run on
EXPOSE 80

# Start the application
ENTRYPOINT ["dotnet", "Pacagroup.Ecommerce.Services.WebApi.dll"]