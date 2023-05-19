/*
 * @Date: 2023-05-18 12:51:57
 * @LastEditors: aei(imaei@foxmail.com)
 * @LastEditTime: 2023-05-20 00:59:00
 * @FilePath: \InspireHub\vite.config.ts
 * @description: 
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
