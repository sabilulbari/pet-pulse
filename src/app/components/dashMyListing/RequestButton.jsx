"use client";

import { Button, Modal } from "@heroui/react";
import {Users } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import AdoptionReq from "./AdoptionReq";

export function RequestButton({ list }) {
  const portalRef = useRef(null);
  const [portalContainer, setPortalContainer] = useState(null);

  const setPortalRef = useCallback((node) => {
    portalRef.current = node;
    setPortalContainer(node);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div ref={setPortalRef} className="relative flex  items-center">
        {!!portalContainer && (
          <Modal>
            <Button variant="secondary" className={"w-30 text-green-500 bg-green-100/70 hover:bg-green-100"}>
              <Users />
              Requests
            </Button>

            <Modal.Backdrop className="h-full " UNSTABLE_portalContainer={portalContainer}>
              <Modal.Container className="h-full max-h-full">
                <Modal.Dialog className="h-full max-h-full rounded-none w-[calc(100vw-100px)] max-w-none! mx-4  ">
                  <Modal.CloseTrigger />

                  <Modal.Header>
                    <Modal.Heading>Check pet request</Modal.Heading>
                  </Modal.Header>

                  <Modal.Body>
                    <AdoptionReq list={list} />
                  </Modal.Body>

                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal.Dialog>
              </Modal.Container>
            </Modal.Backdrop>
          </Modal>
        )}
      </div>
    </div>
  );
}
