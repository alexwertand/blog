import { defineConfig } from 'vite';

export default defineConfig({
	root: 'src/client',
	build: {
		outDir: 'dist',
	},
	optimizeDeps: {
		include: ['bootstrap'],
		entries: ['src/client/main.js'],
	},
	css: {
		preprocessorOptions: {
			scss: {
				quietDeps: true,  // Подавление предупреждений о зависимостях
			},
		},
	},
	server: {
		port: 3000,
		watch: {
			usePolling: true,  // Включаем использование polling для отслеживания изменений
			paths: ['src/client/**/*'],  // Рекомендуется отслеживать все файлы в директории
		},
		hmr: {
			overlay: false,  // Отключаем сообщение о горячей перезагрузке на экране
		},
	},
});
