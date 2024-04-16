namespace StringManipulation.Tests
{
    public class StringOperationsTest
    {
        [Fact]
        public void ConcatenateString()
        {
            var stringOperations = new StringOperations();

            var result = stringOperations.ConcatenateStrings("Hello", "Platzi");

            Assert.Equal("Hello Platzi", result);  
        }
    }
}
