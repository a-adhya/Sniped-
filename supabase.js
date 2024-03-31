import { createClient } from '@supabase/supabase-js'
//const supabaseUrl = process.env.SUPABASE_URL
//const supabaseKey = process.env.SUPABASE_KEY
const SUPABASE_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpZ253cW5tdnByeWFzZ3dmdWhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQwMDc0MTAsImV4cCI6MjAxOTU4MzQxMH0.DDjkGG4M4od416fvjRSmxkRJaF0p4llOhAe032wiBug'
const SUPABASE_URL= 'https://yignwqnmvpryasgwfuhn.supabase.co'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

export default supabase