import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface AppState {
  theme: 'light' | 'dark'
  sidebarOpen: boolean
  user: {
    id: string
    name: string
    email: string
  } | null
  
  // Actions
  setTheme: (theme: 'light' | 'dark') => void
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
  setUser: (user: AppState['user']) => void
  logout: () => void
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        theme: 'light',
        sidebarOpen: true,
        user: null,

        setTheme: (theme) => set({ theme }),
        
        toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
        
        setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
        
        setUser: (user) => set({ user }),
        
        logout: () => set({ user: null }),
      }),
      { 
        name: 'app-store',
        partialize: (state) => ({ 
          theme: state.theme, 
          sidebarOpen: state.sidebarOpen 
        })
      }
    ),
    { name: 'app-store' }
  )
)