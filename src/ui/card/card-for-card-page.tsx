import React from 'react'

import styled from 'styled-components'

import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { authSelectors } from '../../store/auth/auth-selectors'

import { addFavorites, deleteFavorites } from '../../store/favorites/favorites-slices'

import { Button } from '../button/button'
import { H3, P2, P3 } from '../../assets/styles/texts'
import { IconBookMark } from '../../assets/icons/icon-favorites'

import { useToggle } from '../../hooks/use-toggle'

import defaultImage from '../../assets/images/default-image-card.jpg'

type Props = {
  id: number
  name: string
  imageUrl: string
  firstBrewed: string
  description: string
  brewersTips: string
  abv: number
  ibu: number
  srm: number
  ph: number
  isFavorite: boolean
}

export const SingelCard = (props: Props) => {
  const { id, name, imageUrl, firstBrewed, description, brewersTips, abv, ibu, srm, ph, isFavorite } = props
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(authSelectors.getIsAuth)

  const [isToggled, setToggled] = useToggle(isFavorite)

  const handleClick = () => {
    if (!isToggled) {
      dispatch(addFavorites(props))
    } else {
      dispatch(deleteFavorites(id))
    }
    setToggled()
  }

  return (
    <Container>
      <ImageWrapper>
        <img src={imageUrl ?? defaultImage} alt='beer' />
      </ImageWrapper>

      <InfoWrapper>
        <H3>{name}</H3>
        <PropertyWrapper>
          <P3>ABV - {abv}%</P3>
          <P3>IBU - {ibu}</P3>
          <P3>SRM - {srm}</P3>
          <P3>pH - {ph}</P3>
          <P3>First brewed - {firstBrewed}</P3>
        </PropertyWrapper>
        <P2>
          <span>Description:</span> {description}
        </P2>
        <P2>
          <span>Tips:</span> {brewersTips}
        </P2>
      </InfoWrapper>

      <BookMark>
        {isAuth ? (
          <Button size={'small'} onClick={handleClick}>
            <IconBookMark color={!isToggled ? 'dark' : 'blue'} />
          </Button>
        ) : null}
      </BookMark>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  gap: 20px;
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borders.primary};
  border: 1px solid #7e6464;
`

const ImageWrapper = styled.div`
  min-width: 20%;
  height: 250px;
  align-self: center;

  & img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`

const InfoWrapper = styled.div`
  flex: 1 0 min-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

  & span {
    font-weight: bold;
  }
`

const PropertyWrapper = styled.div``

const BookMark = styled.div`
  min-width: 8%;
  text-align: end;
`
