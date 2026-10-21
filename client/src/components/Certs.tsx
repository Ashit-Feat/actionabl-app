import React from "react";
import isoCert from "/assets/certificates/iso27001.png";
import socCert from "/assets/certificates/soc2.png";
import hipaaCert from "/assets/certificates/hipaa.png";
import certin from "/assets/certificates/certin-logo.png"; // new

const CERTS = [
  {
    src: isoCert,
    alt: "ISO 27001 Certified",
    filter: "grayscale(1) brightness(0.18) contrast(1.15)",
  },
  {
    src: socCert,
    alt: "AICPA SOC 2 Certified",
    filter: "grayscale(1) brightness(0.18) contrast(1.15)",
  },
  {
    src: hipaaCert,
    alt: "HIPAA Compliant",
    filter: "grayscale(1) brightness(0.18) contrast(1.15)",
  },
  {
    src: certin,
    alt: "CertIn Certified",
    filter: "grayscale(1) brightness(0.18) contrast(1.15)",
  },
];

const Certs: React.FC = () => (
  <div className="flex items-center gap-4 flex-wrap justify-center">
    {CERTS.map(cert => (
      <img
        key={cert.alt}
        src={cert.src}
        alt={cert.alt}
        className="h-16 max-h-16 object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
        style={{
          width: "auto",
          minWidth: "3.5rem",
          maxWidth: cert.alt === "CertIn Certified" ? "8rem" : "4rem",
          filter: cert.filter,
          display: "block",
        }}
      />
    ))}
  </div>
);

export default Certs;
