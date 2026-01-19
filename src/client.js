import { createClient } from '@supabase/supabase-js';
const URL = 'https://fdsbkpnvyahsyxezvqxh.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkc2JrcG52eWFoc3l4ZXp2cXhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxMDYzNjksImV4cCI6MjA3OTY4MjM2OX0.YFttZB6X7PIJL4Hh7IR-L0yE2evWHbhjefNsIpEhUb0';
export const supabase = createClient(URL, API_KEY);