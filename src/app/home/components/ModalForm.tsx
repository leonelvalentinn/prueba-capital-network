'use client'

import { INPUTS, MODELS } from '@/app/const/inputs'
import { Vehicle } from '@/app/types/vehicle.interface'
import {
  Button,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Textarea,
} from '@heroui/react'
import useAddVehicle from '../hooks/useAddVehicle'
import { useState } from 'react'

export const ModalForm = ({
  isOpen,
  onOpenChange,
  handleSetNewVehicle,
}: {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  handleSetNewVehicle: (vehicle: Vehicle) => void
}) => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const { onSubmit, loading } = useAddVehicle({ onOpenChange, handleSetNewVehicle })

  const getModelsByBrand = (brand: string) => {
    const models = MODELS.find((model) => model.brand === brand)?.models

    return models || []
  }

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size='2xl'
      onClose={() => setSelectedBrand(null)}
    >
      <ModalContent className='bg-[#D4D4D8] text-neutral-800'>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>Ingresar Vehículo</ModalHeader>
            <Form
              className='text-neutral-800 w-full justify-center items-center'
              onSubmit={onSubmit}
            >
              <ModalBody className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {INPUTS.map((input) =>
                  input.options ? (
                    input.name === 'brand' ? (
                      <Select
                        isRequired={input.required}
                        errorMessage={input.errorMessage}
                        key={input.id}
                        name={input.name}
                        className='max-w-xs'
                        label={input.label}
                        placeholder={input.placeholder}
                        radius='sm'
                        onChange={(e) => setSelectedBrand(e.target.value)}
                      >
                        {input.options.map((option) => (
                          <SelectItem key={option} className='text-neutral-800'>
                            {option}
                          </SelectItem>
                        ))}
                      </Select>
                    ) : input.name === 'model' ? (
                      <Select
                        isRequired={input.required}
                        errorMessage={input.errorMessage}
                        key={input.id}
                        name={input.name}
                        className='max-w-xs'
                        label={input.label}
                        placeholder={
                          selectedBrand ? 'Selecciona un modelo' : 'Selecciona una marca primero'
                        }
                        radius='sm'
                        isDisabled={!selectedBrand}
                      >
                        {selectedBrand
                          ? getModelsByBrand(selectedBrand).map((model) => (
                              <SelectItem key={model} className='text-neutral-800'>
                                {model}
                              </SelectItem>
                            ))
                          : null}
                      </Select>
                    ) : (
                      <Select
                        isRequired={input.required}
                        errorMessage={input.errorMessage}
                        key={input.id}
                        name={input.name}
                        className='max-w-xs'
                        label={input.label}
                        placeholder={input.placeholder}
                        radius='sm'
                      >
                        {input.options.map((option) => (
                          <SelectItem key={option} className='text-neutral-800'>
                            {option}
                          </SelectItem>
                        ))}
                      </Select>
                    )
                  ) : input.type === 'text' ? (
                    <Input
                      key={input.id}
                      isRequired={input.required}
                      errorMessage={input.errorMessage}
                      label={input.label}
                      labelPlacement='inside'
                      name={input.name}
                      placeholder={input.placeholder}
                      type={input.type}
                      radius='sm'
                    />
                  ) : (
                    <Textarea
                      key={input.id}
                      name={input.name}
                      className='w-full md:col-span-2'
                      label={input.label}
                      placeholder={input.placeholder}
                    />
                  )
                )}
              </ModalBody>
              <ModalFooter className='w-full'>
                <Button
                  color='danger'
                  variant='light'
                  onPress={() => {
                    onClose()
                    setSelectedBrand(null)
                  }}
                >
                  Cerrar
                </Button>
                <Button
                  isLoading={loading}
                  className='bg-neutral-600 text-neutral-50'
                  type='submit'
                >
                  Guardar
                </Button>
              </ModalFooter>
            </Form>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
