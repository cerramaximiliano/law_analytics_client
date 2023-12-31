import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input} from "@nextui-org/react";
import DestinatarioModal from "./ModalBody/DestinatarioModal.jsx";
import RemitenteModal from "./ModalBody/RemitenteModal.jsx";

export default function Add({isOpen, onOpenChange, handleInputChange, modal}) {
  return (
    <>
      <Modal 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">
                {
                  modal === 'remitente' ? 'Agregar Remitente' : 'Agregar Destinatario'
                }
                </ModalHeader>
              <ModalBody>
                {
                  modal === 'remitente' && <RemitenteModal handleInputChange={handleInputChange} onClose={onClose} />
                }
                {
                  modal === 'destinatario' && <DestinatarioModal handleInputChange={handleInputChange} onClose={onClose}/>
                }

              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
