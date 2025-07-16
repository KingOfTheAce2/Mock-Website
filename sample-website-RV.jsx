import React, { useState } from 'react';
import { Calendar, Users, BookOpen, Mail, Phone, MapPin, ChevronRight, Scale, Award, FileText } from 'lucide-react';

const LegalAssociationWebsite = () => {
  const [activeTab, setActiveTab] = useState('news');

  const newsItems = [
    {
      id: 1,
      title: "Annual Legal Symposium 2025 Registration Open",
      date: "July 15, 2025",
      summary: "Join leading legal professionals for our premier annual symposium featuring keynote speakers, workshops, and networking opportunities.",
      category: "Events",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "New Continuing Legal Education Program Launched",
      date: "July 12, 2025",
      summary: "Our comprehensive CLE program now offers both online and in-person courses to help legal professionals stay current with evolving laws.",
      category: "Education",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Member Spotlight: Excellence in Legal Practice",
      date: "July 8, 2025",
      summary: "Celebrating our members who demonstrate outstanding commitment to legal excellence and professional development.",
      category: "Members",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Legal Research Publication Released",
      date: "July 5, 2025",
      summary: "Our latest research publication explores contemporary legal practices and emerging trends in comparative law.",
      category: "Publications",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah van der Berg",
      position: "President",
      specialization: "International Law",
      bio: "Leading expert in comparative legal systems with over 20 years of experience in international legal practice and academia.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b85b4ad8?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Prof. Michael Petrov",
      position: "Vice President",
      specialization: "Commercial Law",
      bio: "Distinguished professor specializing in commercial law and cross-border legal frameworks.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Elena Kowalski",
      position: "Secretary",
      specialization: "Academic Research",
      bio: "Renowned legal scholar focused on comparative jurisprudence and legal education methodology.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "James Thomson",
      position: "Treasurer",
      specialization: "Financial Law",
      bio: "Expert in financial regulations and non-profit organizational management with focus on professional associations.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Anna Volkov",
      position: "Education Director",
      specialization: "Legal Education",
      bio: "Leading authority on continuing legal education and professional development programs.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Robert de Vries",
      position: "Communications Director",
      specialization: "Legal Communications",
      bio: "Communications expert specializing in legal publication and member engagement strategies.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const agendaItems = [
    {
      date: "July 20, 2025",
      time: "2:00 PM - 4:00 PM",
      title: "Executive Board Meeting",
      location: "Legal Center, Conference Room A",
      description: "Monthly executive board meeting to discuss strategic initiatives and member affairs.",
      type: "Board Meeting"
    },
    {
      date: "July 25, 2025",
      time: "6:00 PM - 8:00 PM",
      title: "CLE Workshop: Contract Law Updates",
      location: "Virtual Event Platform",
      description: "Continuing Legal Education workshop covering recent developments in contract law and best practices.",
      type: "Education"
    },
    {
      date: "July 28, 2025",
      time: "10:00 AM - 12:00 PM",
      title: "Member Networking Breakfast",
      location: "Grand Hotel Conference Center",
      description: "Quarterly networking event for members to connect and discuss current legal trends.",
      type: "Networking"
    },
    {
      date: "August 3, 2025",
      time: "9:00 AM - 5:00 PM",
      title: "Annual Legal Symposium",
      location: "International Conference Center",
      description: "Full-day symposium featuring keynote speakers, panel discussions, and specialized workshops.",
      type: "Conference"
    },
    {
      date: "August 8, 2025",
      time: "3:00 PM - 5:00 PM",
      title: "Research Committee Meeting",
      location: "University Law Library",
      description: "Monthly research committee meeting to review ongoing projects and publications.",
      type: "Committee"
    }
  ];

  const TabButton = ({ id, label, icon: Icon, active, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
        active 
          ? 'bg-blue-600 text-white shadow-lg' 
          : 'text-blue-700 hover:bg-blue-50 hover:text-blue-800'
      }`}
    >
      <Icon size={20} />
      {label}
    </button>
  );

  const getCategoryColor = (category) => {
    const colors = {
      Events: 'bg-blue-100 text-blue-800',
      Education: 'bg-red-100 text-red-800',
      Members: 'bg-blue-100 text-blue-800',
      Publications: 'bg-red-100 text-red-800',
      'Board Meeting': 'bg-gray-100 text-gray-800',
      Networking: 'bg-blue-100 text-blue-800',
      Conference: 'bg-red-100 text-red-800',
      Committee: 'bg-gray-100 text-gray-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Scale className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <h1 className="text-xl font-bold text-blue-900">International Law Association</h1>
                <p className="text-sm text-blue-600">Advancing Legal Excellence Through Collaboration</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2 text-sm font-medium">Home</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2 text-sm font-medium">About</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2 text-sm font-medium">Membership</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2 text-sm font-medium">Resources</a>
              <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2 text-sm font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Bridging Legal Traditions
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto mb-8">
              Join our community of legal professionals dedicated to advancing international law, 
              fostering cross-cultural legal understanding, and promoting excellence in legal practice.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg">
                Become a Member
              </button>
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white rounded-lg shadow-lg border border-blue-200 p-1 gap-1">
            <TabButton 
              id="news" 
              label="News" 
              icon={BookOpen} 
              active={activeTab === 'news'} 
              onClick={setActiveTab} 
            />
            <TabButton 
              id="team" 
              label="Team" 
              icon={Users} 
              active={activeTab === 'team'} 
              onClick={setActiveTab} 
            />
            <TabButton 
              id="agenda" 
              label="Agenda" 
              icon={Calendar} 
              active={activeTab === 'agenda'} 
              onClick={setActiveTab} 
            />
          </div>
        </div>

        {/* News Section */}
        {activeTab === 'news' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map(item => (
              <article key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-blue-100">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                    <span className="text-blue-600 text-sm font-medium">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.summary}</p>
                  <button className="flex items-center text-red-600 hover:text-red-700 font-medium">
                    Read More <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Team Section */}
        {activeTab === 'team' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-blue-100">
                <div className="text-center mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-200"
                  />
                  <h3 className="text-lg font-semibold text-blue-900 mb-1">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-1">{member.position}</p>
                  <p className="text-blue-600 text-sm mb-3">{member.specialization}</p>
                </div>
                <p className="text-gray-600 text-sm text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        )}

        {/* Agenda Section */}
        {activeTab === 'agenda' && (
          <div className="space-y-6">
            {agendaItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-blue-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center gap-4 mb-2 md:mb-0">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {item.date}
                    </div>
                    <div className="text-blue-600 text-sm font-medium">
                      {item.time}
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.type)}`}>
                      {item.type}
                    </div>
                  </div>
                  <div className="flex items-center text-red-600 text-sm font-medium">
                    <MapPin size={16} className="mr-1" />
                    {item.location}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                  <Scale className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold">International Law Association</span>
              </div>
              <p className="text-blue-100">
                Fostering excellence in legal practice through international collaboration, 
                continuing education, and professional development.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-200">Quick Links</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Membership</a></li>
                <li><a href="#" className="hover:text-white">Events</a></li>
                <li><a href="#" className="hover:text-white">Publications</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-200">Services</h4>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#" className="hover:text-white">CLE Programs</a></li>
                <li><a href="#" className="hover:text-white">Research</a></li>
                <li><a href="#" className="hover:text-white">Symposiums</a></li>
                <li><a href="#" className="hover:text-white">Networking</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-200">Contact Info</h4>
              <div className="space-y-2 text-blue-100">
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  info@legalassociation.org
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  +31 (0)20 123 4567
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  Legal Center, Amsterdam 1012 AB
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-100">
            <p>&copy; 2025 International Law Association. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LegalAssociationWebsite;
