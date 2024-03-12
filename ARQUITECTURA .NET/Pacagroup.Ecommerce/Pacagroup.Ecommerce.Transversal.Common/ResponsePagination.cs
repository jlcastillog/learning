﻿namespace Pacagroup.Ecommerce.Transversal.Common
{
    public class ResponsePagination<T>: ResponseGeneric<T>
    {
        public int PageNumber { get; set; }
        public int ToatalPages { get; set; }
        public int TotalCount { get; set; }

        public bool HasPreviousPage => PageNumber > 1;
        public bool HasNextPage => PageNumber < ToatalPages;
    }
}
