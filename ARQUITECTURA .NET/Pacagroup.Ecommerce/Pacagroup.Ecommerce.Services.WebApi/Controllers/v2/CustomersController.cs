using Asp.Versioning;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Pacagroup.Ecommerce.Application.DTO;
using Pacagroup.Ecommerce.Application.Interface.UseCases;

namespace Pacagroup.Ecommerce.Services.WebApi.Controllers.v2
{
    [Authorize]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiController]
    [ApiVersion("2.0")]
    public class CustomersController : Controller
    {
        private readonly ICustomersApplication _customerApplication;

        public CustomersController(ICustomersApplication customerApplication)
        {
            _customerApplication = customerApplication;
        }

        #region sync methods

        [HttpPost("Insert")]
        public IActionResult Insert([FromBody] CustomerDTO cusotmerDto)
        {
            if (cusotmerDto == null)
            {
                return BadRequest();
            }

            var response = _customerApplication.Insert(cusotmerDto);

            if (response.IsSuccess)
                return Ok(response);
            else
                return BadRequest(response.Message);
        }

        [HttpPut("Update/{customerId}")]
        public IActionResult Update(string customerId, [FromBody] CustomerDTO customersDto)
        {
            var customerDto = _customerApplication.Get(customerId);

            if (customerDto == null)
            {
                return NotFound(customerDto.Message);
            }

            if (customersDto == null)
            {
                return BadRequest();
            }

            var response = _customerApplication.Update(customersDto);

            if (response.IsSuccess)
                return Ok(response);
            else
                return BadRequest(response.Message);
        }

        [HttpDelete("Delete/{customerId}")]
        public IActionResult Delete(string custormerId)
        {
            if (string.IsNullOrEmpty(custormerId))
            {
                return BadRequest();
            }

            var response = _customerApplication.Delete(custormerId);

            if (response.IsSuccess)
                return Ok(response);
            else
                return BadRequest(response.Message);
        }

        [HttpGet("Get/{customerId}")]
        public IActionResult Get(string custormerId)
        {
            if (string.IsNullOrEmpty(custormerId))
            {
                return BadRequest();
            }

            var response = _customerApplication.Get(custormerId);

            if (response.IsSuccess)
                return Ok(response);
            else
                return BadRequest(response.Message);
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var response = _customerApplication.GetAll();

            if (response.IsSuccess)
                return Ok(response);
            else
                return BadRequest(response.Message);
        }

        [HttpGet("GetAllWithPagination")]
        public IActionResult GetAllWithPagination([FromQuery] int pageNumber, int pageSize)
        {
            var response = _customerApplication.GetAllWithPagination(pageNumber, pageSize);

            if (response.IsSuccess)
                return Ok(response);
            else
                return BadRequest(response.Message);
        }

        #endregion

        #region Async methods

        [HttpPost("InsertAsync")]
        public async Task<IActionResult> InsertAsync([FromBody] CustomerDTO cusotmerDto)
        {
            if (cusotmerDto == null)
            {
                return BadRequest();
            }

            var response = await _customerApplication.InsertAsync(cusotmerDto);

            if (response.IsSuccess)
                return Ok(response);
            else
                return BadRequest(response.Message);
        }

        [HttpPut("UpdateAsync/{customerId}")]
        public async Task<IActionResult> UpdateAsync(string customerId, [FromBody] CustomerDTO cusotmerDto)
        {
            var customerDto = _customerApplication.Get(customerId);

            if (customerDto == null)
            {
                return NotFound(customerDto.Message);
            }

            if (cusotmerDto == null)
            {
                return BadRequest();
            }

            var response = await _customerApplication.UpdateAsync(cusotmerDto);

            if (response.IsSuccess)
                return Ok(response);
            else
                return BadRequest(response.Message);
        }

        [HttpDelete("DeleteAsync/{customerId}")]
        public async Task<IActionResult> DeleteAsync(string custormerId)
        {
            if (string.IsNullOrEmpty(custormerId))
            {
                return BadRequest();
            }

            var response = await _customerApplication.DeleteAsync(custormerId);

            if (response.IsSuccess)
                return Ok(response);
            else
                return BadRequest(response.Message);
        }

        [HttpGet("GetAsync/{customerId}")]
        public async Task<IActionResult> GetAsync(string customerId)
        {
            if (string.IsNullOrEmpty(customerId))
            {
                return BadRequest();
            }

            var response = await _customerApplication.GetAsync(customerId);

            if (response.IsSuccess)
                return Ok(response);
            else
                return BadRequest(response.Message);
        }

        [HttpGet("GetAllAsync")]
        public async Task<IActionResult> GetAllAsync()
        {
            var response = await _customerApplication.GetAllAsync();

            if (response.IsSuccess)
                return Ok(response);
            else
                return BadRequest(response.Message);
        }

        [HttpGet("GetAllWithPaginationAsync")]
        public async Task<IActionResult> GetAllWithPaginationAsync([FromQuery] int pageNumber, int pageSize)
        {
            var response = await _customerApplication.GetAllWithPaginationASync(pageNumber, pageSize);

            if (response.IsSuccess)
                return Ok(response);
            else
                return BadRequest(response.Message);
        }

        #endregion
    }
}
