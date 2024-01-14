import React, { Fragment } from 'react';
import { Title, Price, AsinContext } from '@amzn/tina-ui';
import AddToCart from '../Partial/AddToCart';
import ShopNow from '../Partial/ShopNow';

import {
  ProductCardLayout,
  ProductImage,
  ProductImageDiv,
  ProductTitleDiv,
  PriceDiv,
  ATCDiv,
  ContentDiv,
  ShopNowDiv,
} from './styles';

export default function({ asin = '', shopNow = false, ...props }) {
  return (
    <ProductCardLayout {...props}>
      <AsinContext.Consumer>
        {({ asinData }) => {
          if (asinData) {
            const currentASINData = asinData?.find(d => d.asin === asin);
            const { productImages } = currentASINData;
            const { physicalId, extension } = productImages[0];

            return (
              physicalId && (
                <ProductImageDiv>
                  <ProductImage
                    src={`https://m.media-amazon.com/images/I/${physicalId}._AC_SY355_.${extension}`}
                    alt={asin}
                  />
                </ProductImageDiv>
              )
            );
          }

          return null;
        }}
      </AsinContext.Consumer>

      <ContentDiv>
        <ProductTitleDiv>
          <Title asin={asin} />
        </ProductTitleDiv>

        {!shopNow && (
          <Fragment>
            <PriceDiv>
              <Price asin={asin} showSalePrice />
            </PriceDiv>

            <ATCDiv>
              <AddToCart asin={asin} />
            </ATCDiv>
          </Fragment>
        )}

        {shopNow && (
          <ShopNowDiv>
            <ShopNow asin={asin} />
          </ShopNowDiv>
        )}
      </ContentDiv>
    </ProductCardLayout>
  );
}
