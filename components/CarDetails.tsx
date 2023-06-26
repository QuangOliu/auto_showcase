import { CarProps } from '@/types'
import React from 'react'

interface CarDetailsProps {
  isOpen: boolean
  closeModal: () => void
  car: CarProps
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car
  return <div>CarDetails</div>
}

export default CarDetails
