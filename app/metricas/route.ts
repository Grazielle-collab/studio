// studio/app/api/metrics/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Coleta métricas básicas do sistema
    const metrics = {
      // Métricas de memória
      nodejs_memory_usage_bytes: process.memoryUsage().heapUsed,
      nodejs_memory_total_bytes: process.memoryUsage().heapTotal,
      
      // Métricas de CPU
      nodejs_cpu_usage_percent: process.cpuUsage().user / 1000000,
      
      // Uptime
      nodejs_uptime_seconds: process.uptime(),
      
      // Timestamp
      nodejs_process_start_time_seconds: Date.now() / 1000,
      
      // Versão do Node
      nodejs_version_info: 1,
    };

    // Formata as métricas no padrão Prometheus
    const output = `
# HELP nodejs_memory_usage_bytes Memory usage in bytes
# TYPE nodejs_memory_usage_bytes gauge
nodejs_memory_usage_bytes{type="heapUsed"} ${metrics.nodejs_memory_usage_bytes}
nodejs_memory_usage_bytes{type="heapTotal"} ${metrics.nodejs_memory_total_bytes}

# HELP nodejs_cpu_usage_percent CPU usage in percent
# TYPE nodejs_cpu_usage_percent gauge
nodejs_cpu_usage_percent ${metrics.nodejs_cpu_usage_percent}

# HELP nodejs_uptime_seconds Process uptime in seconds
# TYPE nodejs_uptime_seconds gauge
nodejs_uptime_seconds ${metrics.nodejs_uptime_seconds}

# HELP nodejs_process_start_time_seconds Start time of the process since unix epoch in seconds
# TYPE nodejs_process_start_time_seconds gauge
nodejs_process_start_time_seconds ${metrics.nodejs_process_start_time_seconds}

# HELP nodejs_version_info Node.js version info
# TYPE nodejs_version_info gauge
nodejs_version_info{version="${process.version}"} 1
`;

    return new NextResponse(output, {
      headers: {
        'Content-Type': 'text/plain; version=0.0.4',
      },
    });
  } catch (error) {
    console.error('Erro ao gerar métricas:', error);
    return NextResponse.json(
      { error: 'Erro ao gerar métricas' },
      { status: 500 }
    );
  }
}