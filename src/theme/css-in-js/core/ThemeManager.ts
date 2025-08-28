import type { IThemeManager, ThemeVars } from "theme"

export class ThemeManager<ThemeName extends string> implements IThemeManager<ThemeName> {
  constructor(private _current: ThemeName, private _themes: Record<ThemeName, ThemeVars>) {}

  getTheme(): ThemeVars {
    return this._themes[this._current]
  }
  get current(): ThemeName {
    return this._current
  }

  setTheme(name: ThemeName): void {
    if (!this._themes[name]) throw new Error(`Unknown theme: ${name}`)
    this._current = name
  }

  createLocal(overrides: Partial<ThemeVars>): ThemeVars {
    return { ...this.getTheme(), ...overrides } as ThemeVars
  }

  exportTheme(): string {
    return JSON.stringify(this.getTheme(), null, 2)
  }

  importTheme(vars: ThemeVars): void {
    this._themes[this._current] = vars
  }
}

export const createThemeManager = <T extends Record<string, ThemeVars>>(themes: T, defaultTheme: Extract<keyof T, string>) => new ThemeManager(defaultTheme, themes)
