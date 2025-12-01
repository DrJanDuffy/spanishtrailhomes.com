# Model Context Protocol (MCP) Setup Guide for Cursor

## What is MCP?

Model Context Protocol (MCP) is an open protocol that allows you to provide custom tools to agentic LLMs (Large Language Models) in Cursor's Composer feature. This enables the AI assistant to interact with external resources, APIs, databases, and custom tools beyond its base capabilities.

---

## Installation Steps

### 1. Open Cursor Settings

- Navigate to **Cursor Settings** > **Features** > **MCP**
- Or use keyboard shortcut: `Cmd/Ctrl + ,` then search for "MCP"

### 2. Add a New MCP Server

- Click the **"+ Add New MCP Server"** button

### 3. Configure the Server

Fill in the configuration fields:

- **Name**: Give your server a nickname (e.g., "Weather API", "Database Tools")
- **Type**: Select the transport type:
  - `stdio` - Standard input/output (for local processes)
  - `sse` - Server-Sent Events (for remote HTTP servers)
- **Command/URL**: Enter either:
  - **For SSE servers**: The URL of the SSE endpoint (e.g., `http://example.com:8000/sse`)
  - **For stdio servers**: A valid shell command to run the server (e.g., `node ~/mcp-server/index.js`)

---

## Example Configurations

### Example 1: stdio Server (Weather Server)

```
Name: Weather Server
Type: stdio
Command: node ~/mcp-quickstart/weather-server-typescript/build/index.js
```

### Example 2: SSE Server

```
Name: Remote API Server
Type: sse
URL: http://example.com:8000/sse
```

### Example 3: stdio Server with Environment Variables

For servers requiring environment variables, create a wrapper script:

**Wrapper Script** (`~/mcp-server/run.sh`):
```bash
#!/bin/bash
export API_KEY="your-api-key"
export DATABASE_URL="postgresql://..."
node ~/mcp-server/build/index.js
```

**MCP Configuration:**
```
Name: Database Tools
Type: stdio
Command: bash ~/mcp-server/run.sh
```

---

## Using MCP Tools

### Tool Availability

1. After adding a server, it will appear in your **MCP servers list**
2. You may need to click the **refresh button** to populate the tool list
3. Available tools will be listed with their descriptions

### Using Tools in Composer

The Composer Agent automatically uses MCP tools when relevant. You can:

1. **Automatic Detection**: The agent will recognize when a tool is needed based on your request
2. **Explicit Usage**: Prompt tool usage by:
   - Referring to the tool by name (e.g., "Use the weather API to check the forecast")
   - Describing the tool's function (e.g., "Check the weather in Las Vegas")

### Tool Execution Process

When a tool is invoked:

1. **Approval Request**: A message appears in chat requesting approval
2. **Arguments Display**: Tool call arguments are shown (expandable for details)
3. **Execution**: Tool runs upon user approval
4. **Response**: Tool's response is displayed in the chat

---

## Popular MCP Server Examples

### 1. File System Operations
- Browse and edit files
- Search file contents
- Manage directories

### 2. Database Access
- Query databases
- Run migrations
- Manage data

### 3. API Integrations
- Weather services
- Stock prices
- Search engines

### 4. Development Tools
- Git operations
- Docker management
- Package management

---

## Important Notes

### Limitations

- ⚠️ **MCP tools may not work with all models** - Check model compatibility
- ⚠️ **MCP tools are only available to the Agent in Composer** - Not available in regular chat
- ⚠️ **Environment Variables**: For servers requiring env vars, use wrapper scripts

### Best Practices

1. **Start Simple**: Begin with basic tools and expand gradually
2. **Test Thoroughly**: Verify tool functionality before relying on it
3. **Monitor Performance**: Watch for latency or timeout issues
4. **Document Custom Tools**: Keep notes on what each tool does
5. **Security**: Be careful with tools that access sensitive data or make changes

### Troubleshooting

**Tools not appearing?**
- Click the refresh button in MCP settings
- Check server logs for errors
- Verify the command/URL is correct

**Tools not executing?**
- Ensure you're using Composer (not regular chat)
- Check that the server is running (for stdio servers)
- Verify network connectivity (for SSE servers)

**Permission denied errors?**
- Check file permissions on executable scripts
- Verify environment variables are set correctly
- Review server logs for specific error messages

---

## For This Project (Spanish Trail Homes)

Potential MCP servers that could be useful:

1. **Real Estate API Integration**: Connect to MLS or property listing APIs
2. **Market Data Tools**: Fetch current Spanish Trail market statistics
3. **SEO Monitoring**: Check Google Search Console data
4. **Analytics Tools**: Access website analytics data
5. **Content Management**: Manage blog posts or property listings

---

## Resources

- [MCP Protocol Specification](https://modelcontextprotocol.io/)
- [Cursor MCP Documentation](https://cursor.sh/docs/mcp)
- [Example MCP Servers](https://github.com/modelcontextprotocol/servers)

---

## Quick Start Checklist

- [ ] Open Cursor Settings > Features > MCP
- [ ] Click "+ Add New MCP Server"
- [ ] Configure server details
- [ ] Test with a simple request in Composer
- [ ] Verify tool execution and response
- [ ] Document any custom configurations

---

**Need Help?** If you encounter issues setting up MCP servers, check the server logs and verify your configuration matches the server's requirements.

