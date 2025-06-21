import { supabase } from './supabase.js';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const postJobForm = document.getElementById('post-job-form');

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) return alert(error.message);
      window.location.href = 'index.html';
    });
  }

  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const location = document.getElementById('location').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) return alert(error.message);
      await supabase.from('profiles').insert([{ id: data.user.id, name, age, location }]);
      alert('Account created! Please log in.');
      window.location.href = 'login.html';
    });
  }

  if (postJobForm) {
    postJobForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const location = document.getElementById('location').value;
      const user = await supabase.auth.getUser();
      if (!user.data.user) return alert('Not logged in');
      await supabase.from('jobs').insert([{ title, description, location, user_id: user.data.user.id }]);
      alert('Job posted!');
      window.location.href = 'browse.html';
    });
  }
});
