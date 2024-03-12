using Microsoft.AspNetCore.Mvc.Testing;
using Pacagroup.Ecommerce.Application.Interface.UseCases;

namespace Pacagroup.Ecommerce.Application.Test
{
    [TestClass]
    public class UsersApplicationTest
    {
        private static WebApplicationFactory<Program> _factory = null;
        private static IServiceScopeFactory _scopeFactory = null;

        [ClassInitialize]
        public static void Initialize(TestContext _)
        {
            _factory = new CustomWebApplicationFactory();
            _scopeFactory = _factory.Services.GetRequiredService<IServiceScopeFactory>();
        }

        [TestMethod]
        public void Authenticate_NoParametersIncluded_ReturnErrorMessageValidation()
        {
            using var scope = _scopeFactory.CreateScope();
            var context = scope.ServiceProvider.GetService<IUsersApplication>();

            //Arrange
            var userName = string.Empty;
            var password = string.Empty;
            var expected = "Validation errors";

            //Act
            var result = context.Authenticate(userName, password);
            var actual = result.Message;

            //Assert
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void Authenticate_ValidParameters_ReturnSuccessMessage()
        {
            using var scope = _scopeFactory.CreateScope();
            var context = scope.ServiceProvider.GetService<IUsersApplication>();

            //Arrange
            var userName = "joseluis.castillo";
            var password = "123456";
            var expected = "Authenticate succeded!!";

            //Act
            var result = context.Authenticate(userName, password);
            var actual = result.Message;

            //Assert
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void Authenticate_NotValidParameters_ReturnUserNotExistsMessage()
        {
            using var scope = _scopeFactory.CreateScope();
            var context = scope.ServiceProvider.GetService<IUsersApplication>();

            //Arrange
            var userName = "test";
            var password = "gfagag80";
            var expected = "User doesn't exist";

            //Act
            var result = context.Authenticate(userName, password);
            var actual = result.Message;

            //Assert
            Assert.AreEqual(expected, actual);
        }
    }
}