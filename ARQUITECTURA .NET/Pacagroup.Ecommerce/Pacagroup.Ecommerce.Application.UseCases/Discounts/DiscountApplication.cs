using AutoMapper;
using Pacagroup.Ecommerce.Application.DTO;
using Pacagroup.Ecommerce.Application.Interface.Infrastructure;
using Pacagroup.Ecommerce.Application.Interface.Persistence;
using Pacagroup.Ecommerce.Application.Interface.UseCases;
using Pacagroup.Ecommerce.Domain.Entities;
using Pacagroup.Ecommerce.Domain.Events;
using Pacagroup.Ecommerce.Transversal.Common;

namespace Pacagroup.Ecommerce.Application.UseCases.Discounts
{
    public class DiscountApplication : IDiscountApplication
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IEventBus _eventBus;

        public DiscountApplication(IUnitOfWork unitOfWork, IMapper mapper, IEventBus eventBus)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _eventBus = eventBus;
        }

        public async Task<Response<bool>> Create(DiscountDTO discountDTO, CancellationToken cancellationToken = default)
        {
            var response = new Response<bool>();

            try
            {
                var discount = _mapper.Map<Discount>(discountDTO);
                await _unitOfWork.Discounts.InsertAsync(discount);

                response.Data = await _unitOfWork.Save(cancellationToken) > 0 ? true : false;

                if (response.Data)
                {
                    response.IsSuccess = true;
                    response.Message = "Create succeded!!";

                    /* Publicamos el evento*/
                    var discountCreatedEvenet = _mapper.Map<DiscountCreatedEvent>(discount);
                    _eventBus.Publish(discountCreatedEvenet);
                }
            }
            catch (Exception e)
            {
                response.Message = e.Message;
            }

            return response;
        }

        public async Task<Response<bool>> Delete(DiscountDTO discountDTO, CancellationToken cancellationToken = default)
        {
            var response = new Response<bool>();

            try
            {
                await _unitOfWork.Discounts.DeleteAsync(discountDTO.Id.ToString());

                response.Data = await _unitOfWork.Save(cancellationToken) > 0 ? true : false;

                if (response.Data)
                {
                    response.IsSuccess = true;
                    response.Message = "Delete succeded!!";
                }
            }
            catch (Exception e)
            {
                response.Message = e.Message;
            }

            return response;
        }

        public async Task<Response<DiscountDTO>> Get(int id, CancellationToken cancellationToken = default)
        {
            var response = new Response<DiscountDTO>();

            try
            {
                var discount = await _unitOfWork.Discounts.GetAsync(id, cancellationToken);

                if (discount is null)
                {
                    response.IsSuccess = false;
                    response.Message = "Discount doesn't exist";
                    return response;
                }

                response.Data = _mapper.Map<DiscountDTO>(discount);
                response.IsSuccess = true;
                response.Message = "Get succeded!!";
            }
            catch (Exception e)
            {
                response.Message = e.Message;
            }

            return response;
        }

        public async Task<Response<List<DiscountDTO>>> GetAll(CancellationToken cancellationToken = default)
        {
            var response = new Response<List<DiscountDTO>>();

            try
            {
                var discount = await _unitOfWork.Discounts.GetAllAsync(cancellationToken);
                response.Data = _mapper.Map<List<DiscountDTO>>(discount);
                if (response.Data != null)
                {
                    response.IsSuccess = true;
                    response.Message = "GetAll succeded!!";
                }
            }
            catch (Exception e)
            {
                response.Message = e.Message;
            }

            return response;
        }

        public async Task<ResponsePagination<IEnumerable<DiscountDTO>>> GetAllWithPagination(int pageNumber, int pageSize)
        {
            var response = new ResponsePagination<IEnumerable<DiscountDTO>>();
            try
            {
                var count = await _unitOfWork.Discounts.CountAsync();

                var customers = await _unitOfWork.Discounts.GetAllWithPaginationAsync(pageNumber, pageSize);
                response.Data = _mapper.Map<IEnumerable<DiscountDTO>>(customers);

                if (response.Data != null)
                {
                    response.PageNumber = pageNumber;
                    response.ToatalPages = (int)Math.Ceiling(count / (double)pageSize);
                    response.TotalCount = count;
                    response.IsSuccess = true;
                    response.Message = "GetAll succeded!!";
                }
            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Message = ex.Message;
            }

            return response;
        }

        public async Task<Response<bool>> Update(DiscountDTO discountDTO, CancellationToken cancellationToken = default)
        {
            var response = new Response<bool>();

            try
            {
                var discount = _mapper.Map<Discount>(discountDTO);
                await _unitOfWork.Discounts.UpdateAsync(discount);

                response.Data = await _unitOfWork.Save(cancellationToken) > 0 ? true : false;

                if (response.Data)
                {
                    response.IsSuccess = true;
                    response.Message = "Update succeded!!";
                }
            }
            catch (Exception e)
            {
                response.Message = e.Message;
            }

            return response;
        }
    }
}
