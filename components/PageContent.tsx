'use client'

import { useState } from 'react'

interface PageContentProps {
  environment: 'dev' | 'staging' | 'prod'
}

export default function PageContent({ environment }: PageContentProps) {
  const [activeEnvironment, setActiveEnvironment] = useState(environment)

  const getEnvironmentUrls = (env: string) => {
    switch (env) {
      case 'dev':
        return {
          widget: 'https://dev.konsuld.app/widget/index.js',
          api: 'https://dev-connect.konsuld.app'
        }
      case 'staging':
        return {
          widget: 'https://staging.konsuld.app/widget/index.js',
          api: 'https://staging-connect.konsuld.app'
        }
      case 'prod':
        return {
          widget: 'https://konsuld.app/widget/index.js',
          api: 'https://connect.konsuld.app'
        }
      default:
        return {
          widget: 'https://dev.konsuld.app/widget/index.js',
          api: 'https://dev-connect.konsuld.app'
        }
    }
  }

  const urls = getEnvironmentUrls(activeEnvironment)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div style={{ 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      color: '#374151'
    }}>
      {/* Header */}
      <header style={{ 
        padding: '1rem 2rem',
        borderBottom: '1px solid #e5e7eb'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '24px',
            height: '24px',
            background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '12px',
              height: '12px',
              background: 'white',
              borderRadius: '50%',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '2px',
                left: '2px',
                width: '8px',
                height: '8px',
                background: 'white',
                borderRadius: '50%'
              }}></div>
            </div>
          </div>
          <span style={{ 
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#6b7280'
          }}>konsuld</span>
        </div>
      </header>

      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Main Title Section */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <h1 style={{ 
                fontSize: '2.5rem',
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#111827'
              }}>
                Add Konsuld to your app in seconds
              </h1>
              <p style={{ 
                fontSize: '1.125rem',
                lineHeight: '1.6',
                color: '#6b7280',
                marginBottom: '2rem'
              }}>
                Drop one script tag and a div, and the Konsuld widget appears instantly. 
                No build steps or SDK initialization required.
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ 
                backgroundColor: '#f9fafb',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{ 
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#374151'
                }}>Include this script</div>
                <code style={{ 
                  fontSize: '0.875rem',
                  fontFamily: 'Monaco, Consolas, monospace',
                  color: '#1f2937'
                }}>
                  {`<script defer
src="${urls.widget}">
</script>`}
                </code>
              </div>
              
              <div style={{ 
                backgroundColor: '#f9fafb',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{ 
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#374151'
                }}>And add this container</div>
                <code style={{ 
                  fontSize: '0.875rem',
                  fontFamily: 'Monaco, Consolas, monospace',
                  color: '#1f2937'
                }}>
                  {`<div class="konsuld-widget"></div>`}
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            <div style={{ 
              backgroundColor: '#f9fafb',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{ 
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#111827'
              }}>Zero-config</h3>
              <p style={{ 
                fontSize: '0.875rem',
                color: '#6b7280',
                lineHeight: '1.5'
              }}>
                Works anywhere you can add HTML. No framework bindings required.
              </p>
            </div>
            
            <div style={{ 
              backgroundColor: '#f9fafb',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{ 
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#111827'
              }}>Fast & lightweight</h3>
              <p style={{ 
                fontSize: '0.875rem',
                color: '#6b7280',
                lineHeight: '1.5'
              }}>
                Loads on demand and renders instantly with minimal footprint.
              </p>
            </div>
            
            <div style={{ 
              backgroundColor: '#f9fafb',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{ 
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#111827'
              }}>Flexible placement</h3>
              <p style={{ 
                fontSize: '0.875rem',
                color: '#6b7280',
                lineHeight: '1.5'
              }}>
                Place the widget container in any page section or modal.
              </p>
            </div>
          </div>
        </section>

        {/* React Component Example */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ 
            backgroundColor: '#1f2937',
            borderRadius: '8px',
            padding: '1rem',
            position: 'relative'
          }}>
            <div style={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <span style={{ 
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#9ca3af'
              }}>
                Use in a React component ({activeEnvironment})
              </span>
              <button 
                onClick={() => copyToClipboard(`import { useEffect } from 'react';

export default function KonsuldDemo() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "${urls.widget}";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <div className="konsuld-widget" style={{ height: 600 }} />;
}`)}
                style={{
                  backgroundColor: '#374151',
                  color: '#f9fafb',
                  border: 'none',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  cursor: 'pointer'
                }}
              >
                Copy
              </button>
            </div>
            <pre style={{ 
              color: '#f9fafb',
              fontSize: '0.875rem',
              fontFamily: 'Monaco, Consolas, monospace',
              margin: 0,
              overflow: 'auto'
            }}>
{`import { useEffect } from 'react';

export default function KonsuldDemo() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "${urls.widget}";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <div className="konsuld-widget" style={{ height: 600 }} />;
}`}
            </pre>
          </div>
        </section>

        {/* Konsuld Integrations Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '1.5rem',
            fontWeight: '700',
            marginBottom: '2rem',
            color: '#111827'
          }}>
            Konsuld Integrations
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {/* Widget Column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: '#f59e0b',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    background: 'white',
                    borderRadius: '50%'
                  }}></div>
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#111827'
                }}>Konsuld Widget</h3>
              </div>
              
              <p style={{ 
                fontSize: '0.875rem',
                color: '#6b7280',
                marginBottom: '1rem',
                lineHeight: '1.5'
              }}>
                Embeddable scheduling widget that works anywhere you can add HTML. 
                No build steps or SDK initialization required.
              </p>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ 
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.25rem'
                }}>Widget Endpoint ({activeEnvironment})</div>
                <code style={{ 
                  fontSize: '0.875rem',
                  fontFamily: 'Monaco, Consolas, monospace',
                  color: '#1f2937',
                  backgroundColor: '#f9fafb',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px'
                }}>{urls.widget}</code>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ 
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>Integration Features</div>
                <ul style={{ 
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  paddingLeft: '1rem',
                  lineHeight: '1.5'
                }}>
                  <li>Zero-configuration setup</li>
                  <li>Responsive design</li>
                  <li>Customizable styling</li>
                  <li>Multiple instances support</li>
                </ul>
              </div>
            </div>

            {/* API Column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  background: '#f59e0b',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    background: 'white',
                    borderRadius: '50%'
                  }}></div>
                </div>
                <h3 style={{ 
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#111827'
                }}>Connect API</h3>
              </div>
              
              <p style={{ 
                fontSize: '0.875rem',
                color: '#6b7280',
                marginBottom: '1rem',
                lineHeight: '1.5'
              }}>
                RESTful API for programmatic access to Konsuld services. 
                Perfect for custom integrations and automation.
              </p>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ 
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.25rem'
                }}>API Base URL ({activeEnvironment})</div>
                <code style={{ 
                  fontSize: '0.875rem',
                  fontFamily: 'Monaco, Consolas, monospace',
                  color: '#1f2937',
                  backgroundColor: '#f9fafb',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px'
                }}>{urls.api}</code>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ 
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>API Documentation ({activeEnvironment})</div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button style={{
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    cursor: 'pointer'
                  }}>
                    Content API Docs
                  </button>
                  <button style={{
                    backgroundColor: '#f3f4f6',
                    color: '#374151',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    cursor: 'pointer'
                  }}>
                    Search API Docs
                  </button>
                </div>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ 
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>Common Endpoints</div>
                <div style={{ 
                  fontSize: '0.875rem',
                  fontFamily: 'Monaco, Consolas, monospace',
                  color: '#6b7280',
                  lineHeight: '1.5'
                }}>
                  GET /api/v1/schedules<br/>
                  POST /api/v1/schedules<br/>
                  PUT /api/v1/schedules/:id<br/>
                  GET /api/v1/availability<br/>
                  POST /api/v1/bookings
                </div>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ 
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>Testing the API</div>
                <div style={{ 
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>Authentication</div>
                <p style={{ 
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  marginBottom: '1rem',
                  lineHeight: '1.5'
                }}>
                  Most API endpoints require authentication. Include your API token in the request headers:
                </p>
                
                {/* Code Examples */}
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ 
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: '#9ca3af',
                    marginBottom: '0.5rem'
                  }}>JavaScript/Fetch</div>
                  <div style={{ 
                    backgroundColor: '#1f2937',
                    borderRadius: '6px',
                    padding: '1rem',
                    position: 'relative'
                  }}>
                    <button 
                      onClick={() => copyToClipboard(`fetch('${urls.api}/api/v1/schedules', {
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  }
})`)}
                      style={{
                        position: 'absolute',
                        top: '0.5rem',
                        right: '0.5rem',
                        backgroundColor: '#374151',
                        color: '#f9fafb',
                        border: 'none',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        cursor: 'pointer'
                      }}
                    >
                      Copy
                    </button>
                    <pre style={{ 
                      color: '#f9fafb',
                      fontSize: '0.875rem',
                      fontFamily: 'Monaco, Consolas, monospace',
                      margin: 0,
                      overflow: 'auto'
                    }}>
{`fetch('${urls.api}/api/v1/schedules', {
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  }
})`}
                    </pre>
                  </div>
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ 
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: '#9ca3af',
                    marginBottom: '0.5rem'
                  }}>cURL</div>
                  <div style={{ 
                    backgroundColor: '#1f2937',
                    borderRadius: '6px',
                    padding: '1rem',
                    position: 'relative'
                  }}>
                    <button 
                      onClick={() => copyToClipboard(`curl -X GET "${urls.api}/api/v1/schedules" \\
  -H "Authorization: Bearer YOUR_API_TOKEN" \\
  -H "Content-Type: application/json"`)}
                      style={{
                        position: 'absolute',
                        top: '0.5rem',
                        right: '0.5rem',
                        backgroundColor: '#374151',
                        color: '#f9fafb',
                        border: 'none',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        cursor: 'pointer'
                      }}
                    >
                      Copy
                    </button>
                    <pre style={{ 
                      color: '#f9fafb',
                      fontSize: '0.875rem',
                      fontFamily: 'Monaco, Consolas, monospace',
                      margin: 0,
                      overflow: 'auto'
                    }}>
{`curl -X GET "${urls.api}/api/v1/schedules" \\
  -H "Authorization: Bearer YOUR_API_TOKEN" \\
  -H "Content-Type: application/json"`}
                    </pre>
                  </div>
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ 
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: '#9ca3af',
                    marginBottom: '0.5rem'
                  }}>Browser Console</div>
                  <div style={{ 
                    backgroundColor: '#1f2937',
                    borderRadius: '6px',
                    padding: '1rem',
                    position: 'relative'
                  }}>
                    <button 
                      onClick={() => copyToClipboard(`fetch('${urls.api}/api/v1/schedules', {
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  }
}).then(r => r.json()).then(console.log)`)}
                      style={{
                        position: 'absolute',
                        top: '0.5rem',
                        right: '0.5rem',
                        backgroundColor: '#374151',
                        color: '#f9fafb',
                        border: 'none',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        cursor: 'pointer'
                      }}
                    >
                      Copy
                    </button>
                    <pre style={{ 
                      color: '#f9fafb',
                      fontSize: '0.875rem',
                      fontFamily: 'Monaco, Consolas, monospace',
                      margin: 0,
                      overflow: 'auto'
                    }}>
{`fetch('${urls.api}/api/v1/schedules', {
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  }
}).then(r => r.json()).then(console.log)`}
                    </pre>
                  </div>
                </div>
              </div>
              
              <div>
                <div style={{ 
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>API Features</div>
                <ul style={{ 
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  paddingLeft: '1rem',
                  lineHeight: '1.5'
                }}>
                  <li>RESTful endpoints</li>
                  <li>JSON responses</li>
                  <li>Token-based authentication</li>
                  <li>Rate limiting</li>
                  <li>Comprehensive API documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Environment Switcher */}
        <section style={{ 
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <h2 style={{ 
            fontSize: '1.5rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: '#111827'
          }}>
            Switch Environments
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
            {['dev', 'staging', 'prod'].map((env) => (
              <button
                key={env}
                onClick={() => setActiveEnvironment(env as 'dev' | 'staging' | 'prod')}
                style={{
                  backgroundColor: activeEnvironment === env ? '#3b82f6' : '#f3f4f6',
                  color: activeEnvironment === env ? 'white' : '#374151',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  textTransform: 'capitalize'
                }}
              >
                {env}
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ 
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid #e5e7eb',
        color: '#9ca3af',
        fontSize: '0.875rem'
      }}>
        © 2025 Konsuld Demo
      </footer>
    </div>
  )
}
