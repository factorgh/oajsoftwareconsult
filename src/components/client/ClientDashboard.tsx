import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, Ticket, MessageSquare, FileText, Clock, CheckCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { mockProjects, mockTickets } from '../../data/mockData';

export const ClientDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'tickets' | 'messages'>('projects');

  const stats = [
    { label: 'Active Projects', value: '3', icon: FolderOpen, color: 'primary' },
    { label: 'Open Tickets', value: '2', icon: Ticket, color: 'warning' },
    { label: 'Completed', value: '12', icon: CheckCircle, color: 'success' },
    { label: 'Total Hours', value: '1,240', icon: Clock, color: 'secondary' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'in-progress':
        return 'primary';
      case 'pending':
        return 'warning';
      default:
        return 'secondary';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'danger';
      case 'medium':
        return 'warning';
      case 'low':
        return 'success';
      case 'urgent':
        return 'danger';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Client Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage your projects and track progress</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                      <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-4 border-b border-gray-200">
            {[
              { id: 'projects', label: 'Projects', icon: FolderOpen },
              { id: 'tickets', label: 'Support Tickets', icon: Ticket },
              { id: 'messages', label: 'Messages', icon: MessageSquare },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-3 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            {activeTab === 'projects' && (
              <div className="space-y-4">
                {mockProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                            <Badge variant={getStatusColor(project.status)}>
                              {project.status.replace('-', ' ')}
                            </Badge>
                            <Badge variant={getPriorityColor(project.priority)}>
                              {project.priority} priority
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-4">{project.description}</p>
                          <div className="flex items-center space-x-6 text-sm text-gray-500">
                            <span>Budget: ${project.budget.toLocaleString()}</span>
                            <span>Progress: {project.progress}%</span>
                            <span>Due: {project.endDate.toLocaleDateString()}</span>
                          </div>
                          <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'tickets' && (
              <div className="space-y-4">
                {mockTickets.map((ticket, index) => (
                  <motion.div
                    key={ticket.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <h3 className="text-lg font-semibold text-gray-900">{ticket.title}</h3>
                            <Badge variant={getStatusColor(ticket.status)}>
                              {ticket.status.replace('-', ' ')}
                            </Badge>
                            <Badge variant={getPriorityColor(ticket.priority)}>
                              {ticket.priority}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-4">{ticket.description}</p>
                          <div className="flex items-center space-x-6 text-sm text-gray-500">
                            <span>Created: {ticket.createdAt.toLocaleDateString()}</span>
                            <span>Updated: {ticket.updatedAt.toLocaleDateString()}</span>
                            {ticket.assignedTo && <span>Assigned to: {ticket.assignedTo}</span>}
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          View Ticket
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'messages' && (
              <Card className="p-8 text-center">
                <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Messages Yet</h3>
                <p className="text-gray-600">Your project messages will appear here.</p>
              </Card>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};