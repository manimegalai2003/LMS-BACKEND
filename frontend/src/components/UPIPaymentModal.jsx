import React from "react";

function UPIPaymentModal({ fine, onClose, onConfirm }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>UPI Payment</h2>

        <p style={styles.text}>
          You are about to pay <b>₹{fine.amount}</b> for a library fine.
        </p>

        <p style={styles.text}>Use any UPI app to simulate payment:</p>

        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pn=LibraryFine&am=${fine.amount}`}
          alt="UPI QR"
          style={styles.qrImage}
        />

        <button style={styles.payBtn} onClick={onConfirm}>
          I Have Paid
        </button>

        <button style={styles.cancelBtn} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}
export default UPIPaymentModal;
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
  },
  modal: {
    background: "#FFE6F2",
    padding: "20px",
    width: "350px",
    borderRadius: "12px",
    border: "2px solid #FF4D6A",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  title: { color: "#5A001F", marginBottom: "10px" },
  text: { color: "#5A001F" },

  
  payBtn: {
    marginTop: "15px",
    width: "100%",
    padding: "10px",
    background: "#FF4D6A",
    color: "white",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
  },

  cancelBtn: {
    marginTop: "10px",
    width: "100%",
    padding: "10px",
    background: "#ccc",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
  },
};
