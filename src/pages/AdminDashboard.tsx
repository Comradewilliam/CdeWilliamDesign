import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { LogOut, Users, FolderPlus, FileText, Trash2, Edit, Plus } from 'lucide-react';
import toast from 'react-hot-toast';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
}

interface Project {
  id: string;
  name: string;
  client: string;
  year: string;
  category: string;
  thumbnails: string[];
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
}

export function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('contacts');
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
      return;
    }

    // Load data from localStorage
    const savedContacts = localStorage.getItem('contactSubmissions');
    const savedProjects = localStorage.getItem('projects');
    
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    toast.success('Logged out successfully');
    navigate('/admin');
  };

  const deleteContact = (id: string) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
    localStorage.setItem('contactSubmissions', JSON.stringify(updatedContacts));
    toast.success('Contact deleted');
  };

  const deleteProject = (id: string) => {
    const updatedProjects = projects.filter(project => project.id !== id);
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    toast.success('Project deleted');
  };

  const ProjectForm = ({ project, onSave, onCancel }: { 
    project?: Project; 
    onSave: (project: Project) => void; 
    onCancel: () => void; 
  }) => {
    const [formData, setFormData] = useState<Partial<Project>>(
      project || {
        name: '',
        client: '',
        year: new Date().getFullYear().toString(),
        category: 'web-design',
        thumbnails: [''],
        description: '',
        challenge: '',
        solution: '',
        results: [''],
        technologies: ['']
      }
    );

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newProject: Project = {
        id: project?.id || Date.now().toString(),
        name: formData.name || '',
        client: formData.client || '',
        year: formData.year || '',
        category: formData.category || '',
        thumbnails: formData.thumbnails?.filter(t => t.trim()) || [],
        description: formData.description || '',
        challenge: formData.challenge || '',
        solution: formData.solution || '',
        results: formData.results?.filter(r => r.trim()) || [],
        technologies: formData.technologies?.filter(t => t.trim()) || []
      };
      onSave(newProject);
    };

    const addField = (field: 'thumbnails' | 'results' | 'technologies') => {
      setFormData({
        ...formData,
        [field]: [...(formData[field] || []), '']
      });
    };

    const updateField = (field: 'thumbnails' | 'results' | 'technologies', index: number, value: string) => {
      const updated = [...(formData[field] || [])];
      updated[index] = value;
      setFormData({ ...formData, [field]: updated });
    };

    const removeField = (field: 'thumbnails' | 'results' | 'technologies', index: number) => {
      const updated = (formData[field] || []).filter((_, i) => i !== index);
      setFormData({ ...formData, [field]: updated });
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold">{project ? 'Edit Project' : 'Add New Project'}</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Client</label>
                <input
                  type="text"
                  value={formData.client}
                  onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                <input
                  type="text"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="web-design">Web Design</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="mobile">Mobile</option>
                  <option value="branding">Branding</option>
                  <option value="academic-project">Academic Project</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">The Challenge</label>
              <textarea
                value={formData.challenge}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Our Solution</label>
              <textarea
                value={formData.solution}
                onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                rows={3}
                required
              />
            </div>

            {/* Thumbnails */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">Thumbnails (1-3)</label>
                <button
                  type="button"
                  onClick={() => addField('thumbnails')}
                  className="text-blue-600 hover:text-blue-800"
                  disabled={(formData.thumbnails?.length || 0) >= 3}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              {formData.thumbnails?.map((thumbnail, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="url"
                    value={thumbnail}
                    onChange={(e) => updateField('thumbnails', index, e.target.value)}
                    className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Image URL"
                  />
                  <button
                    type="button"
                    onClick={() => removeField('thumbnails', index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Results */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">Results</label>
                <button
                  type="button"
                  onClick={() => addField('results')}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              {formData.results?.map((result, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={result}
                    onChange={(e) => updateField('results', index, e.target.value)}
                    className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Result description"
                  />
                  <button
                    type="button"
                    onClick={() => removeField('results', index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">Technologies</label>
                <button
                  type="button"
                  onClick={() => addField('technologies')}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              {formData.technologies?.map((tech, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={tech}
                    onChange={(e) => updateField('technologies', index, e.target.value)}
                    className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Technology name"
                  />
                  <button
                    type="button"
                    onClick={() => removeField('technologies', index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-6 border-t">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                {project ? 'Update Project' : 'Create Project'}
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const saveProject = (project: Project) => {
    let updatedProjects;
    if (editingProject) {
      updatedProjects = projects.map(p => p.id === project.id ? project : p);
      toast.success('Project updated successfully');
    } else {
      updatedProjects = [...projects, project];
      toast.success('Project created successfully');
    }
    
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    setShowProjectForm(false);
    setEditingProject(null);
  };

  return (
    <>
      <SEO title="Admin Dashboard" description="Admin dashboard for CDE William Design" />
      
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <LogOut className="w-5 h-5 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('contacts')}
              className={`flex items-center px-4 py-2 rounded-lg ${
                activeTab === 'contacts' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
              }`}
            >
              <Users className="w-5 h-5 mr-2" />
              Contact Submissions ({contacts.length})
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center px-4 py-2 rounded-lg ${
                activeTab === 'projects' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
              }`}
            >
              <FolderPlus className="w-5 h-5 mr-2" />
              Projects ({projects.length})
            </button>
          </div>

          {/* Contact Submissions Tab */}
          {activeTab === 'contacts' && (
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Contact Form Submissions</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {contacts.map((contact) => (
                      <tr key={contact.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {contact.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {contact.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {contact.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {contact.service}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {contact.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button
                            onClick={() => deleteContact(contact.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {contacts.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No contact submissions yet.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b flex justify-between items-center">
                <h2 className="text-xl font-semibold">Projects</h2>
                <button
                  onClick={() => setShowProjectForm(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Project
                </button>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {projects.map((project) => (
                  <div key={project.id} className="border rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">Client: {project.client}</p>
                    <p className="text-gray-600 text-sm mb-2">Year: {project.year}</p>
                    <p className="text-gray-600 text-sm mb-4">Category: {project.category}</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setEditingProject(project);
                          setShowProjectForm(true);
                        }}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteProject(project.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {projects.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  No projects yet. Create your first project!
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Project Form Modal */}
      {showProjectForm && (
        <ProjectForm
          project={editingProject || undefined}
          onSave={saveProject}
          onCancel={() => {
            setShowProjectForm(false);
            setEditingProject(null);
          }}
        />
      )}
    </>
  );
}