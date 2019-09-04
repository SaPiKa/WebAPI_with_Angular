using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using WebAPI_Practice.Models;

namespace WebAPI_Practice.Services
{
    public class PaymentDetailServices
    {
        private readonly PaymentDetailContext _paymentContext;

        public PaymentDetailServices(PaymentDetailContext paymentContext)
        {
            _paymentContext = paymentContext;
        }

        public async Task<ActionResult<PaymentDetail>> GetPaymentDetail(int id)
        {
            var paymentDetail = await _paymentContext.PaymentDetails.FindAsync(id);

            if (paymentDetail == null)
            {
                throw new Exception("Nem létezik ilyen ID-vel rendelkező PaymentDetail!");
            }

            return paymentDetail;
        }

        //Megfigyelés: Nagyon ritkán előfordul hogy a felületen nem látszódik a változás
        public async Task<IActionResult> PutPaymentDetail(int id, PaymentDetail paymentDetail)
        {
            if (id != paymentDetail.PMId)
            {
                throw new Exception("Az azonosító nem egyezik!");
            }

            _paymentContext.Entry(paymentDetail).State = EntityState.Modified;

            try
            {
                await _paymentContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaymentDetailExists(id))
                {
                    throw new Exception("Nem létezik ilyen azonosítóval rendelkező PaymentDetail!");
                }
                else
                {
                    throw;
                }
            }

            return null;
        }

        public async Task<ActionResult<PaymentDetail>> DeletePaymentDetail(int id)
        {
            var paymentDetail = await _paymentContext.PaymentDetails.FindAsync(id);
            if (paymentDetail == null)
            {
                throw new Exception("Hiba történt a Delete művelet közben!");
            }

            _paymentContext.PaymentDetails.Remove(paymentDetail);
            await _paymentContext.SaveChangesAsync();

            return paymentDetail;
        }

        private bool PaymentDetailExists(int id)
        {
            return _paymentContext.PaymentDetails.Any(e => e.PMId == id);
        }
    }
}
