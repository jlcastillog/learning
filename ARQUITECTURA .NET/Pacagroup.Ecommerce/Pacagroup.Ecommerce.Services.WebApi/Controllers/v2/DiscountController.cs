using Asp.Versioning;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using Pacagroup.Ecommerce.Application.DTO;
using Pacagroup.Ecommerce.Application.Interface.UseCases;
using Pacagroup.Ecommerce.Application.UseCases.Customers;

namespace Pacagroup.Ecommerce.Services.WebApi.Controllers.v2
{
    [Authorize]
    [EnableRateLimiting("fixedWindow")]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiController]
    [ApiVersion("2.0")]
    public class DiscountController : Controller
    {
        private readonly IDiscountApplication _discountAppliccation;

        public DiscountController(IDiscountApplication discountAppliccation)
        {
            _discountAppliccation = discountAppliccation;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> CreateAsync([FromBody] DiscountDTO discountDto)
        {
            if (discountDto == null)
            {
                return BadRequest();
            }

            var response = await _discountAppliccation.Create(discountDto);

            if (response.IsSuccess)
                return Ok(response);
            else
                return BadRequest(response.Message);
        }

        [HttpPut("Update/{discountId}")]
        public async Task<IActionResult> UpdateAsync(int discountId, [FromBody] DiscountDTO discountDto)
        {
            var discountDtoExists = await _discountAppliccation.Get(discountId);

            if (discountDtoExists.Data == null)
            {
                return NotFound(discountDtoExists.Message);
            }

            if (discountDto == null)
            {
                return BadRequest();
            }

            var response = await _discountAppliccation.Update(discountDto);

            if (response.IsSuccess)
                return Ok(response);
            else
                return BadRequest(response.Message);
        }

        [HttpDelete("Delete/{discountId}")]
        public async Task<IActionResult> DeleteAsync(int discountId)
        {
            var discountDtoExists = await _discountAppliccation.Get(discountId);

            if (discountDtoExists.Data == null)
            {
                return NotFound(discountDtoExists.Message);
            }

            var response = await _discountAppliccation.Delete(discountDtoExists.Data);

            if (response.IsSuccess)
                return Ok(response);
            else
                return BadRequest(response.Message);
        }

        [HttpGet("Get/{discountId}")]
        public async Task<IActionResult> GetAsync(int discountId)
        {
            var response = await _discountAppliccation.Get(discountId);

            if (response.IsSuccess)
                return Ok(response);
            else
                return BadRequest(response.Message);
        }

        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAllAsync()
        {
            var response = await _discountAppliccation.GetAll();

            if (response.IsSuccess)
                return Ok(response);
            else
                return BadRequest(response.Message);
        }


        [HttpGet("GetAllWithPagination")]
        public async Task<IActionResult> GetAllWithPagination([FromQuery] int pageNumber, int pageSize)
        {
            var response = await _discountAppliccation.GetAllWithPagination(pageNumber, pageSize);

            if (response.IsSuccess)
                return Ok(response);
            else
                return BadRequest(response.Message);
        }
    }
}
