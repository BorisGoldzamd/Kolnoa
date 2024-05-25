{/* eslint-disable */}
const StreamingModal = ({ info, onClose }) => {
    const modalStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '1001',
        backgroundColor: 'white',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        width: '80%',
        maxWidth: '600px',
        color: 'black',
        overflowY: 'auto', // Adds scroll to modal content if it exceeds the screen height
        maxHeight: '80%'   // Limits the modal height and adds scroll
    };

    const backdropStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '1000', // Backdrop should be directly behind the modal content
        cursor: 'pointer' // Indicates that the backdrop is clickable
    };

    const closeButtonStyle = {
        float: 'right',
        fontSize: '1.5rem',
        lineHeight: '1rem',
        cursor: 'pointer',
        border: 'none',
        background: 'transparent',
        color: 'black'
    };

    return (
        <div style={backdropStyle} onClick={onClose}>
            <div className="modal-content" style={modalStyle} onClick={e => e.stopPropagation()}> {/* Prevents modal close when clicking inside */}
                <button style={closeButtonStyle} onClick={onClose}>&times;</button>
                <h2>Streaming Information</h2> {/* eslint-disable */}
                {info[0]? info.map((serviceInfo, index) => (
                    <div key={index} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                        <p>Service: {serviceInfo.service}</p>
                        <p>Quality: {serviceInfo.quality || 'N/A'}</p>
                        <p>Type: {serviceInfo.streamingType}</p>
                        <p>Price: {serviceInfo.price ? `${serviceInfo.price.formatted}` : 'Free'}</p>
                        <p><a href={serviceInfo.link} target="_blank" rel="noopener noreferrer">Watch Now</a></p>
                    </div>
                )): <p>There is no streaming platform for the movie</p>}
            </div>
        </div>
    );
};

export default StreamingModal;
