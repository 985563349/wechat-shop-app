import { View } from '@tarojs/components';
import { Button } from '@/components';
import Taro from '@tarojs/taro';

const About: React.FC = () => {
  Taro.login({
    success: function (res) {
      console.log('success', res);
      //session_key 未过期，并且在本生命周期一直有效
    },
    fail: function (res) {
      console.log(res);
      // session_key 已经失效，需要重新执行登录流程
      Taro.login(); //重新登录
    },
  });

  // let loginDoing = false;
  // const loginEvent = [];

  // const userProfile = observable(
  //   {
  //     user: { avatar: '', isCompleted: false, nickname: '', uid: 0, 0    token: '', },
  //     async loginProcess() {
  //       if (this.user.token) { return this.user; }
  //       loginDoing = true;
  //       let code;
  //       try {
  //         const codeResult = await Taro.login();
  //         if (codeResult.errMsg !== 'login:ok') {

  //           throw new Error('Taro.login 失败');
  //         }
  //         code = codeResult.code;
  //       } catch (e) {
  //         loginDoing = false;

  //         throw e;
  //       }
  //       const result = await post(URL().user.login,
  //         { code,     });
  //       let user = {
  //         ...result.user,       token: result.token,
  //       };
  //       this.user = user;
  //       loginDoing = false;
  //       setTimeout(() => {
  //         let length = loginEvent.length;
  //         for (let i = 0; i < length; i++) {
  //           loginEvent.pop()(user);
  //         }
  //       });
  //       return user;
  //     }, login() {
  //       if (loginDoing) {
  //         return new Promise((resolve) => {

  //           loginEvent.push(resolve);
  //         });

  //       } else {
  //         return this.loginProcess()

  //       }
  //     },
  //   });

  return (
    <View>
      About Page
      <Button size='mini'>button</Button>
    </View>
  );
};

export default About;
