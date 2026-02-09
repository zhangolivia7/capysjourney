import { useState } from 'react';
import { X } from 'lucide-react';

export function WaitlistModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const scriptUrl = import.meta.env.VITE_GAS_URL;
    
    if (!scriptUrl) {
      console.error('Google Apps Script URL not configured');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    // Prepare form data
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('timestamp', new Date().toISOString());
    
    // Optimize: Fire and forget - show success immediately
    // The request continues in the background
    fetch(scriptUrl, {
      method: 'POST',
      body: formDataToSend,
    }).catch((error) => {
      // Log errors but don't block UI
      console.error('Background submission error:', error);
    });
    
    // Show success immediately for instant feedback
    setSubmitStatus('success');
    setFormData({ name: '', email: '' });
    setIsSubmitting(false);
    
    // Close modal after 1.5 seconds
    setTimeout(() => {
      onClose();
      setSubmitStatus(null);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in-0 zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="size-5" />
        </button>

        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Join the Waitlist
          </h2>
          <p className="text-gray-600">
            Be the first to know when Capy's Journey launches!
          </p>
        </div>

        {submitStatus === 'success' ? (
          <div className="text-center py-8">
            <div className="inline-flex p-4 bg-green-100 rounded-full mb-4">
              <svg
                className="size-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-lg font-semibold text-gray-900 mb-2">
              You're on the list!
            </p>
            <p className="text-gray-600">
              We'll notify you when we launch.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your email"
              />
            </div>

            {submitStatus === 'error' && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">
                  Something went wrong. Please try again later.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-amber-600 text-white rounded-xl font-semibold hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Joining...' : 'Join Waitlist'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
