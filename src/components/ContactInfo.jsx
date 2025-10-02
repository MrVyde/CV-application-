function ContactInfo({ contact, setContact }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="section">
        <h3>Contact</h3>
            <div className="section">
            <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={contact.phone}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={contact.email}
                onChange={handleChange}
            />
            <input
                type="text"
                name="website"
                placeholder="Website"
                value={contact.website}
                onChange={handleChange}
            />
            <input
                type="text"
                name="address"
                placeholder="Address"
                value={contact.address}
                onChange={handleChange}
            />
        </div>
        {/* Submit Button for now */}
        <button type="submit">Save Section</button>
    </div>
  );
}

export default ContactInfo;