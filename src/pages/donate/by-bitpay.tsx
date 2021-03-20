import React from "react";
import { DefaultLayout } from "../../components/Layout";

export default class PageBitPay extends React.Component {
  render() {
    let frontmatter = { title: "Pay via Bit Pay", breadcrumbs: "Donate | Bitpay" };
    return (
      <>
        <DefaultLayout frontmatter={frontmatter}>
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">Note:</h3>
            <p class="mt-1 text-sm text-gray-500">
              Due to new European regulations, BitPay now requires you to have an
              account to use the service. If you have one, you will be prompted to
              login on the next screen. If you do not have one and wish to use
              BitPay, you will have to create one.
            </p>
          </div>

          <div className="max-w-xl">
            <form
              id="bitpay"
              className="space-y-8 divide-y divide-gray-200"
              action="https://bitpay.com/checkout"
              method="post"
              accept-charset="UTF-8"
            >
              <input type="hidden" name="action" value="checkout" />
              <input
                type="hidden"
                name="data"
                value="ZS/G0X8A4fQ6dmRox0yTiSFLGWWvPxhgaRJ9dSllM6gcuYdrhWI6MyoP8ZoUmNBfevOI9xN4uslrn9pe8X5PnnU1QlbbJi1qXooA3/Ag5taavL202nw2PlHQ6j1m47DyxhmllmGont0OHzzfr/pg513De3/dr3kHv/rAy2oIy3SZYddhYLud0PPvNnwg0wYS9PeWwjFkJGnAwvKmapT/l4+kdOQXS/xak7xHXrC04oIf926H30/mqtRIh6IK58cMFT4CBvgaN/GjWHRLF4dtwQ=="
              />
              <input type="hidden" name="form_id" value="kodi_donations_form" />

              <div className="space-y-8 divide-y divide-gray-200">
                <div className="pt-8">
                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        for="price"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Amount
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          name="price"
                          id="price"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        for="currency"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Currency
                      </label>
                      <div className="mt-1">
                        <select
                          id="currency"
                          name="currency"
                          className="shadow-sm focus:ring-kodi focus:border-kodi block w-full sm:text-sm border-gray-300 rounded-md"
                        >
                          <option value="USD">$ USD</option>
                          <option value="EUR">€ EUR</option>
                          <option value="GBP">£ GBP</option>
                          <option value="CAD">$ CAD</option>
                          <option value="AUD">$ AUD</option>
                          <option value="JPY">¥ JPY</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        for="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="shadow-sm focus:ring-kodi focus:border-kodi block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-kodi hover:bg-kodi-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kodi-lighter"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </DefaultLayout>
      </>
    );
  }
}
