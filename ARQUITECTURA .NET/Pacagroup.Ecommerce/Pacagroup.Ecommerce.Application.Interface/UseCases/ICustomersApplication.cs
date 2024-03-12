using Pacagroup.Ecommerce.Application.DTO;
using Pacagroup.Ecommerce.Transversal.Common;

namespace Pacagroup.Ecommerce.Application.Interface.UseCases
{
    public interface ICustomersApplication
    {
        #region Sync methods

        Response<bool> Insert(CustomerDTO customerDto);
        Response<bool> Update(CustomerDTO customerDto);
        Response<bool> Delete(string customerId);
        Response<CustomerDTO> Get(string customerId);
        Response<IEnumerable<CustomerDTO>> GetAll();
        ResponsePagination<IEnumerable<CustomerDTO>> GetAllWithPagination(int pageNumber, int pageSize);

        #endregion

        #region Async methods

        Task<Response<bool>> InsertAsync(CustomerDTO customerDto);
        Task<Response<bool>> UpdateAsync(CustomerDTO customerDto);
        Task<Response<bool>> DeleteAsync(string customerId);
        Task<Response<CustomerDTO>> GetAsync(string customerId);
        Task<Response<IEnumerable<CustomerDTO>>> GetAllAsync();
        Task<ResponsePagination<IEnumerable<CustomerDTO>>> GetAllWithPaginationASync(int pageNumber, int pageSize);

        #endregion
    }
}
