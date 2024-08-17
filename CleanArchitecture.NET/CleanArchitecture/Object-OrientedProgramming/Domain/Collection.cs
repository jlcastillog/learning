namespace Object_OrientedProgramming.Domain
{
    public class Collection<T>
    {
        private T[] _elememtns;
        private int _index;
        private int _size;

        public Collection(int size) 
        {
            _index = 0;
            _size = size;
            _elememtns = new T[_size];
        }

        public void Add(T element)
        {
            if (_index < _size)
            {
                _elememtns[_index++] = element;
            }
        }

        public T[] Get() => _elememtns;
    }
}
