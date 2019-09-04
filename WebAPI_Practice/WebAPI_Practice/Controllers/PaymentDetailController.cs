using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI_Practice.Models;
using WebAPI_Practice.Services;

namespace WebAPI_Practice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentDetailController : ControllerBase
    {
        private readonly PaymentDetailContext _paymentContext;
        private readonly PaymentDetailServices _paymentDetailServices;

        public PaymentDetailController(PaymentDetailContext paymentContext, PaymentDetailServices paymentDetailServices)
        {
            _paymentContext = paymentContext;
            _paymentDetailServices = paymentDetailServices;
        }

        // GET: api/PaymentDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PaymentDetail>>> GetPaymentDetail()
            => await _paymentContext.PaymentDetails.ToListAsync();

        // GET: api/PaymentDetail/5
        [HttpGet("{id}")]
        public Task<ActionResult<PaymentDetail>> GetPaymentDetail(int id)
            => _paymentDetailServices.GetPaymentDetail(id);

        // PUT: api/PaymentDetail/5
        [HttpPut("{id}")]
        public void PutPaymentDetail(int id, PaymentDetail paymentDetail)
            => _paymentDetailServices.PutPaymentDetail(id, paymentDetail);

        // POST: api/PaymentDetail
        [HttpPost]
        public async Task<ActionResult<PaymentDetail>> PostPaymentDetail(PaymentDetail paymentDetail)
        {
            _paymentContext.PaymentDetails.Add(paymentDetail);
            await _paymentContext.SaveChangesAsync();
            return CreatedAtAction("GetPaymentDetail", new { id = paymentDetail.PMId }, paymentDetail);
        }

        // DELETE: api/PaymentDetail/5
        [HttpDelete("{id}")]
        public Task<ActionResult<PaymentDetail>> DeletePaymentDetail(int id)
            => _paymentDetailServices.DeletePaymentDetail(id);
    }
}
