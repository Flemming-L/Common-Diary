const { createClient } = supabase;
const supabaseClient = createClient('你的 Project URL', '你的 anon public key');
//注册
async function handleSignUp(email, password) {
  const { data, error } = await supabaseClient.auth.signUp({
    email: email,
    password: password,
  });
  if (error) {
    alert('注册失败：' + error.message);
    return;
  }
  // 如果关闭了邮箱确认，这里 data.session 会有值，用户直接处于登录状态
  if (data.session) {
    alert('注册成功并已登录！');
    // 这里可以跳转到首页或显示用户信息
  } else {
    alert('注册成功，请去邮箱点击确认链接后再登录。');
  }
}
//登录
async function handleSignIn(email, password) {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    alert('登录失败，请检查邮箱或密码');
    return;
  }
  alert('登录成功！');
  // 可以在这里更新 UI，显示用户已登录
}

// 获取当前会话
const { data: { session } } = await supabaseClient.auth.getSession();
if (session) {
  // 用户已登录，session.user.email 就是邮箱
  console.log('当前用户：', session.user.email);
} else {
  // 用户未登录
}

//退出
async function handleSignOut() {
  await supabaseClient.auth.signOut();
  // 页面会自动收到 SIGNED_OUT 事件，刷新 UI 即可
}

// 注册表单提交
function registerbtn() {
document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault(); // 阻止表单默认的页面刷新行为
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  await handleSignUp(email, password); // 调用上一步写好的函数
});
}

// 登录表单提交
function loginbtn() {
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  await handleSignIn(email, password);
});
}