import React, { useMemo, useRef } from 'react'
import styled from 'styled-components'
import useMediaQuery from '../../../hooks/useMediaQueryHook'
import Flex from '../../../UI/Flex'
import { UnFound } from '../../../UI/UnFound'
import { ProductList } from '../List/ProductList'
import { FrameHeader } from './FrameHeader'
import { FrameSiderBar } from './FrameSiderBar'


export const ProductFrame = ({data, title}) => {
  const isMatch = useMediaQuery("(max-width: 1180px)")

  return (
    <SProductFrame>
        <FrameHeader title={title} dataLength={data.max_length} />
        <Grid>
          {
            !isMatch && <FrameSiderBar  min_price={data.min_price} dataLength={data.max_length} max_price={data.max_price} title={title} />
          }
            {
              data.list && (
                <ProductList title={title} data={data.list} />
            )
            }
        </Grid> 
    </SProductFrame>
  )
}

const Grid = styled.div`    
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  @media(max-width: 1180px) {
    display:block;
  };
`
const SProductFrame = styled(Flex)`
    width: 100%;
    flex-direction: column;
`