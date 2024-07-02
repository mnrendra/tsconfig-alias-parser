const tsConfigValues = [
  {},
  { compilerOptions: null },
  { compilerOptions: {} },
  { compilerOptions: { baseUrl: null } },
  { compilerOptions: { baseUrl: './' } },
  { compilerOptions: { baseUrl: './', paths: null } },
  { compilerOptions: { baseUrl: './src', paths: { '@': ['./'] } } },
  { compilerOptions: { baseUrl: './src', paths: { '@': ['./'], '@/*': ['./*'], '@/*/': ['./*/'] } } }
]

export default tsConfigValues
