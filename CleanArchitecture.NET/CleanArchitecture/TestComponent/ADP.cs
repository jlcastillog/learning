namespace TestComponent
{
    /// <summary>
    /// Example Acyclic Dependencies Principle (ADP)
    /// </summary>

    //********************************************
    // Componet C
    //********************************************

    public class C
    {
        private readonly IA _a;
        public C(IA a)
        {
            _a = a;
        }
    }

    public interface IA 
    {
        void MethodA();
    }

    //********************************************
    // Componet A
    //********************************************

    public class A : IA
    {
        private readonly B _b;
        public A(B b)
        {
            _b = b;
        }

        public void MethodA()
        {
        }
    }

    //********************************************
    // Componet B
    //********************************************

    public class B
    {
        private readonly C _c;
        public B(C c)
        {
            _c = c;
        }
    }

}
