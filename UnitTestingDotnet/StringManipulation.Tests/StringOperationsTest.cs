namespace StringManipulation.Tests
{
    public class StringOperationsTest
    {
        [Fact(Skip = "Deprecated")]
        public void ConcatenateString()
        {
            // Arrange
            var stringOperations = new StringOperations();

            // Act
            var result = stringOperations.ConcatenateStrings("Hello", "Platzi");

            // Assert
            Assert.NotNull(result);
            Assert.NotEmpty(result);
            Assert.Equal("Hello Platzi", result);  
        }

        [Fact]
        public void IsPalindrome_True()
        {
            // Arrange
            var stringOperations = new StringOperations();

            // Act
            var result = stringOperations.IsPalindrome("ama");

            // Assert
            Assert.True(result);
        }

        [Fact]
        public void IsPalindrome_False()
        {
            // Arrange
            var stringOperations = new StringOperations();

            // Act
            var result = stringOperations.IsPalindrome("hello");

            // Assert
            Assert.False(result);
        }

        [Fact]
        public void QuantintyInWords()
        {
            // Arrange
            var stringOperations = new StringOperations();

            // Act
            var result = stringOperations.QuantintyInWords("coche", 7);

            // Assert
            Assert.StartsWith("siete", result);
            Assert.Contains("coche", result);
            Assert.Equal("siete coches", result);
        }

        [Fact]
        public void GetStringLength_Exception()
        {
            // Arrange
            var stringOperations = new StringOperations();

            // Assert
            Assert.ThrowsAny<ArgumentNullException>(() => stringOperations.GetStringLength(null));
        }

        [Fact]
        public void GetStringLength() 
        {
            // Arrange
            var stringOperations = new StringOperations();

            // Act
            var result = stringOperations.GetStringLength("car");

            // Assert
            Assert.Equal(3, result);
        }

        [Fact]
        public void TruncateString_Exception()
        {
            // Arrange
            var stringOperations = new StringOperations();

            // Assert
            Assert.ThrowsAny<ArgumentOutOfRangeException>(() => stringOperations.TruncateString("car", 0));
        }

        [Theory]
        [InlineData("V",5)]
        [InlineData("X", 10)]
        [InlineData("XXII", 22)]
        public void FromRomanToNumber(string romanNumber, int expected)
        {
            // Arrange
            var stringOperations = new StringOperations();

            // Act
            var result = stringOperations.FromRomanToNumber(romanNumber);

            //Assert
            Assert.Equal(expected, result);
        }
    }
}
