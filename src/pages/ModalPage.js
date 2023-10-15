import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [ showModal, setShowModal ] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = <div>
    <Button primary onClick={handleClose}>I Accept</Button>
  </div>;

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>
      Here is an important agreement for you to accept
    </p>
  </Modal>;

  return (
    <div className="relative">
      
    <Button primary onClick={handleClick}>Open Modal</Button>
    {showModal && modal}
    
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien lorem, mattis eget feugiat et, vestibulum ac nunc. In hac habitasse platea dictumst. Pellentesque consequat ipsum eget mauris placerat, eu hendrerit nulla tincidunt. Praesent rhoncus molestie finibus. Nulla facilisi. Quisque vulputate vehicula urna. Integer ultricies tortor sed odio consequat, eu tempus nisi ultricies. Sed egestas est neque. Cras gravida imperdiet iaculis. Morbi at erat ut dolor suscipit ultricies sit amet cursus ex. Duis quis neque eleifend, pulvinar eros sed, iaculis erat. Suspendisse nunc leo, tristique quis sodales id, lacinia id sem. Vivamus eu nibh sit amet risus tempus iaculis. Nam volutpat, arcu nec viverra hendrerit, turpis augue vulputate nunc, fringilla efficitur erat erat a ligula. Cras varius dolor nec neque tempus facilisis. Mauris porta justo enim, sit amet vehicula elit dignissim vitae.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien lorem, mattis eget feugiat et, vestibulum ac nunc. In hac habitasse platea dictumst. Pellentesque consequat ipsum eget mauris placerat, eu hendrerit nulla tincidunt. Praesent rhoncus molestie finibus. Nulla facilisi. Quisque vulputate vehicula urna. Integer ultricies tortor sed odio consequat, eu tempus nisi ultricies. Sed egestas est neque. Cras gravida imperdiet iaculis. Morbi at erat ut dolor suscipit ultricies sit amet cursus ex. Duis quis neque eleifend, pulvinar eros sed, iaculis erat. Suspendisse nunc leo, tristique quis sodales id, lacinia id sem. Vivamus eu nibh sit amet risus tempus iaculis. Nam volutpat, arcu nec viverra hendrerit, turpis augue vulputate nunc, fringilla efficitur erat erat a ligula. Cras varius dolor nec neque tempus facilisis. Mauris porta justo enim, sit amet vehicula elit dignissim vitae.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien lorem, mattis eget feugiat et, vestibulum ac nunc. In hac habitasse platea dictumst. Pellentesque consequat ipsum eget mauris placerat, eu hendrerit nulla tincidunt. Praesent rhoncus molestie finibus. Nulla facilisi. Quisque vulputate vehicula urna. Integer ultricies tortor sed odio consequat, eu tempus nisi ultricies. Sed egestas est neque. Cras gravida imperdiet iaculis. Morbi at erat ut dolor suscipit ultricies sit amet cursus ex. Duis quis neque eleifend, pulvinar eros sed, iaculis erat. Suspendisse nunc leo, tristique quis sodales id, lacinia id sem. Vivamus eu nibh sit amet risus tempus iaculis. Nam volutpat, arcu nec viverra hendrerit, turpis augue vulputate nunc, fringilla efficitur erat erat a ligula. Cras varius dolor nec neque tempus facilisis. Mauris porta justo enim, sit amet vehicula elit dignissim vitae.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien lorem, mattis eget feugiat et, vestibulum ac nunc. In hac habitasse platea dictumst. Pellentesque consequat ipsum eget mauris placerat, eu hendrerit nulla tincidunt. Praesent rhoncus molestie finibus. Nulla facilisi. Quisque vulputate vehicula urna. Integer ultricies tortor sed odio consequat, eu tempus nisi ultricies. Sed egestas est neque. Cras gravida imperdiet iaculis. Morbi at erat ut dolor suscipit ultricies sit amet cursus ex. Duis quis neque eleifend, pulvinar eros sed, iaculis erat. Suspendisse nunc leo, tristique quis sodales id, lacinia id sem. Vivamus eu nibh sit amet risus tempus iaculis. Nam volutpat, arcu nec viverra hendrerit, turpis augue vulputate nunc, fringilla efficitur erat erat a ligula. Cras varius dolor nec neque tempus facilisis. Mauris porta justo enim, sit amet vehicula elit dignissim vitae.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien lorem, mattis eget feugiat et, vestibulum ac nunc. In hac habitasse platea dictumst. Pellentesque consequat ipsum eget mauris placerat, eu hendrerit nulla tincidunt. Praesent rhoncus molestie finibus. Nulla facilisi. Quisque vulputate vehicula urna. Integer ultricies tortor sed odio consequat, eu tempus nisi ultricies. Sed egestas est neque. Cras gravida imperdiet iaculis. Morbi at erat ut dolor suscipit ultricies sit amet cursus ex. Duis quis neque eleifend, pulvinar eros sed, iaculis erat. Suspendisse nunc leo, tristique quis sodales id, lacinia id sem. Vivamus eu nibh sit amet risus tempus iaculis. Nam volutpat, arcu nec viverra hendrerit, turpis augue vulputate nunc, fringilla efficitur erat erat a ligula. Cras varius dolor nec neque tempus facilisis. Mauris porta justo enim, sit amet vehicula elit dignissim vitae.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien lorem, mattis eget feugiat et, vestibulum ac nunc. In hac habitasse platea dictumst. Pellentesque consequat ipsum eget mauris placerat, eu hendrerit nulla tincidunt. Praesent rhoncus molestie finibus. Nulla facilisi. Quisque vulputate vehicula urna. Integer ultricies tortor sed odio consequat, eu tempus nisi ultricies. Sed egestas est neque. Cras gravida imperdiet iaculis. Morbi at erat ut dolor suscipit ultricies sit amet cursus ex. Duis quis neque eleifend, pulvinar eros sed, iaculis erat. Suspendisse nunc leo, tristique quis sodales id, lacinia id sem. Vivamus eu nibh sit amet risus tempus iaculis. Nam volutpat, arcu nec viverra hendrerit, turpis augue vulputate nunc, fringilla efficitur erat erat a ligula. Cras varius dolor nec neque tempus facilisis. Mauris porta justo enim, sit amet vehicula elit dignissim vitae.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien lorem, mattis eget feugiat et, vestibulum ac nunc. In hac habitasse platea dictumst. Pellentesque consequat ipsum eget mauris placerat, eu hendrerit nulla tincidunt. Praesent rhoncus molestie finibus. Nulla facilisi. Quisque vulputate vehicula urna. Integer ultricies tortor sed odio consequat, eu tempus nisi ultricies. Sed egestas est neque. Cras gravida imperdiet iaculis. Morbi at erat ut dolor suscipit ultricies sit amet cursus ex. Duis quis neque eleifend, pulvinar eros sed, iaculis erat. Suspendisse nunc leo, tristique quis sodales id, lacinia id sem. Vivamus eu nibh sit amet risus tempus iaculis. Nam volutpat, arcu nec viverra hendrerit, turpis augue vulputate nunc, fringilla efficitur erat erat a ligula. Cras varius dolor nec neque tempus facilisis. Mauris porta justo enim, sit amet vehicula elit dignissim vitae.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien lorem, mattis eget feugiat et, vestibulum ac nunc. In hac habitasse platea dictumst. Pellentesque consequat ipsum eget mauris placerat, eu hendrerit nulla tincidunt. Praesent rhoncus molestie finibus. Nulla facilisi. Quisque vulputate vehicula urna. Integer ultricies tortor sed odio consequat, eu tempus nisi ultricies. Sed egestas est neque. Cras gravida imperdiet iaculis. Morbi at erat ut dolor suscipit ultricies sit amet cursus ex. Duis quis neque eleifend, pulvinar eros sed, iaculis erat. Suspendisse nunc leo, tristique quis sodales id, lacinia id sem. Vivamus eu nibh sit amet risus tempus iaculis. Nam volutpat, arcu nec viverra hendrerit, turpis augue vulputate nunc, fringilla efficitur erat erat a ligula. Cras varius dolor nec neque tempus facilisis. Mauris porta justo enim, sit amet vehicula elit dignissim vitae.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien lorem, mattis eget feugiat et, vestibulum ac nunc. In hac habitasse platea dictumst. Pellentesque consequat ipsum eget mauris placerat, eu hendrerit nulla tincidunt. Praesent rhoncus molestie finibus. Nulla facilisi. Quisque vulputate vehicula urna. Integer ultricies tortor sed odio consequat, eu tempus nisi ultricies. Sed egestas est neque. Cras gravida imperdiet iaculis. Morbi at erat ut dolor suscipit ultricies sit amet cursus ex. Duis quis neque eleifend, pulvinar eros sed, iaculis erat. Suspendisse nunc leo, tristique quis sodales id, lacinia id sem. Vivamus eu nibh sit amet risus tempus iaculis. Nam volutpat, arcu nec viverra hendrerit, turpis augue vulputate nunc, fringilla efficitur erat erat a ligula. Cras varius dolor nec neque tempus facilisis. Mauris porta justo enim, sit amet vehicula elit dignissim vitae.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien lorem, mattis eget feugiat et, vestibulum ac nunc. In hac habitasse platea dictumst. Pellentesque consequat ipsum eget mauris placerat, eu hendrerit nulla tincidunt. Praesent rhoncus molestie finibus. Nulla facilisi. Quisque vulputate vehicula urna. Integer ultricies tortor sed odio consequat, eu tempus nisi ultricies. Sed egestas est neque. Cras gravida imperdiet iaculis. Morbi at erat ut dolor suscipit ultricies sit amet cursus ex. Duis quis neque eleifend, pulvinar eros sed, iaculis erat. Suspendisse nunc leo, tristique quis sodales id, lacinia id sem. Vivamus eu nibh sit amet risus tempus iaculis. Nam volutpat, arcu nec viverra hendrerit, turpis augue vulputate nunc, fringilla efficitur erat erat a ligula. Cras varius dolor nec neque tempus facilisis. Mauris porta justo enim, sit amet vehicula elit dignissim vitae.
      </p>
    </div>
  );
}

export default ModalPage;