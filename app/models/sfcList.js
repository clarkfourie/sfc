<Alloy>
    <TabGroup>
        <Tab title="Profile">
            <Window title="Profile" barColor="{user.themeBGColor}">
                <RightNavButton><Button class="logout" onClick="logout"/></RightNavButton>
                <Label text="{user.realname}" top="10"/>
                <Label text="{user.email}" top="40"/>
                <ImageView width="100%" image="{user.themeImage}" bottom="0"/>
            </Window>
        </Tab>
        <Tab title="About Us">
            <Window title="About Us" barColor="{user.themeBGColor}">
                <!-- <RightNavButton><Button class="logout" onClick="logout"/></RightNavButton> -->
                <WebView url="http://en.wikipedia.org/wiki/Arrested_Development_(TV_series)"/>
            </Window>
        </Tab>
        <Tab title="Settings">
            <Window title="Settings" barColor="{user.themeBGColor}">
                <!-- <RightNavButton><Button class="logout" onClick="logout"/></RightNavButton> -->
                <TableView id="themes" onClick="setTheme">
                    <TableViewSection headerTitle="Email">
                        <TableViewRow>
                            <TextField id="email" value="{user.email}" onBlur="setEmail" />
                        </TableViewRow>
                    </TableViewSection>
                    <TableViewSection headerTitle="Themes">
                        <TableViewRow title="Default" id="theme0"/>
                        <TableViewRow title="Banana Stand" id="theme1"/>
                        <TableViewRow title="Never-Nude Blue Man" id="theme2"/>
                    </TableViewSection>
                </TableView>
            </Window>
        </Tab>
    </TabGroup>
</Alloy>