import React from 'react';
import { VERSION, Tab} from '@twilio/flex-ui';
import { FlexPlugin, loadCSS } from 'flex-plugin';
import DummyCRM from './components/DummyCRM.js'
import CustomTheme from './components/CustomTheme'
import WarningIcon from '@material-ui/icons/Warning';
import TabComponent from './components/TabComponent.js';

const PLUGIN_NAME = 'BankingPlugin';

export default class BankingPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {

    const configuration = {
      colorTheme: CustomTheme
    };
    manager.updateConfig(configuration);

    const fraudChannel = flex.DefaultTaskChannels.createDefaultTaskChannel("fraud", (task) => task.taskChannelUniqueName === "fraud",
    <WarningIcon />, <WarningIcon/>, "#4A154B");
    flex.TaskChannels.register(fraudChannel);

    flex.TaskCanvasTabs.Content.add(
      <Tab icon={<WarningIcon/>} iconActive={<WarningIcon/>} key="my-new-tab">
        <TabComponent/>
      </Tab>
    );

    flex.RootContainer.Content.remove("project-switcher")
    
    manager.strings.NoTasks = "Commonwealth Bank"

    flex.MainHeader.defaultProps.logoUrl = "https://s.yimg.com/ny/api/res/1.2/YF3cwx2e9cPxIbw7EZtrcQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MC4zMDc2OTIzMDc2OTIz/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-10/ac6f1130-0c27-11eb-bfcd-3db9c82f4201"
    
    flex.AgentDesktopView.defaultProps.splitterOptions = { initialFirstPanelSize: "400px", minimumFirstPanelSize: "400px" }
    flex.NoTasksCanvas.Content.remove("availability")

    loadCSS("https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css");
    
    const options = { sortOrder: -1 };
    flex.AgentDesktopView
    .Panel2
    .Content
    .replace(<DummyCRM key="dummy-crm" />, options);

    manager.workerClient.on("reservationCreated", async function(reservation) {
      if(reservation.task.attributes.fraud === true) {

      flex.Actions.invokeAction("AcceptTask", {sid: reservation.sid});
      flex.Actions.invokeAction("StartOutboundCall", {destination: reservation.task.attributes.from, taskAttributes: reservation.task.attributes});
      }   
    })
  }

  
  
  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
