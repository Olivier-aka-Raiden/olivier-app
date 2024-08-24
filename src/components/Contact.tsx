import React, {useState} from 'react';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add form submission logic here (e.g., send data to a server or API)
        console.log('Form submitted:', { name, email, message });
        const subject = encodeURIComponent('New Contact Form Submission');
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        window.location.href = `mailto:oliviervillequey@gmail.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h2 className="content__title">Contact</h2>
            {submitted ? (
                <p>Thank you for contacting me! I'll get back to you soon.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
                        <textarea
                            name="message"
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                            rows={5}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                    >
                        Send
                    </button>
                </form>
            )}
            <div className="credits">
                <p>Made by <a href="https://linkedin.com/in/olivier-villequey-fr/">@olivier</a></p>
                <p><a href="https://github.com/Olivier-aka-Raiden">Github</a> for more of my code.</p>
            </div>
        </div>
    );
};

export default Contact;
