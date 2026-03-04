import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/data';
import { Mail, Github, Facebook, Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Vui lòng nhập họ tên";
    if (!formData.email) tempErrors.email = "Vui lòng nhập email";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email không hợp lệ";
    if (!formData.message) tempErrors.message = "Vui lòng nhập nội dung";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      setErrorMessage("Lỗi: Không đọc được file .env. Hãy kiểm tra lại tên file hoặc khởi động lại server.");
      setStatus('error');
      return;
    }

    console.log("EmailJS Config:", { serviceID, templateID, publicKey });

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
          setErrors({});
          setTimeout(() => setStatus(''), 5000);
      }, (error) => {
          console.error(error);
          setErrorMessage("Lỗi từ EmailJS: " + (error.text || JSON.stringify(error)));
          setStatus('error');
      });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Liên hệ</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
          <h3 className="text-2xl font-semibold mb-6">Thông tin liên hệ</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Hãy liên hệ với tôi qua form bên cạnh hoặc thông qua các mạng xã hội dưới đây.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail className="text-primary" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex gap-4 mt-6">
              <a href={personalInfo.github} className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:text-primary transition-colors"><Github size={24} /></a>
              <a href={personalInfo.facebook} className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:text-primary transition-colors"><Facebook size={24} /></a>
              <a href={personalInfo.linkedin} className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:text-primary transition-colors"><Linkedin size={24} /></a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Họ tên</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-primary outline-none" placeholder="Nhập họ tên của bạn" />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-primary outline-none" placeholder="example@mail.com" />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Nội dung</label>
              <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-primary outline-none" placeholder="Nội dung tin nhắn..."></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <button type="submit" disabled={status === 'sending'} className="w-full py-3 bg-primary text-white rounded-lg font-bold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:bg-blue-400 disabled:cursor-not-allowed">
              {status === 'sending' ? 'Đang gửi...' : <><Send size={18} /> Gửi tin nhắn</>}
            </button>
            {status === 'success' && <p className="text-green-500 text-center mt-4">Tin nhắn đã được gửi thành công!</p>}
            {status === 'error' && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;