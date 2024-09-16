namespace ApplicationLayer.Exceptions
{
    public class ValidationException : Exception
    {
        public ValidationException() :base("Error de validación") { }

        public ValidationException(string message) : base(message) { }
    }
}
